# syntax=docker/dockerfile:1

FROM ubuntu:20.04 AS base

WORKDIR /app

FROM base AS installer_yarn

RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    ca-certificates \
    && apt-get clean

# Install Node.js and Yarn
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn

FROM base AS install_deps

# Copy the current directory contents into the container
COPY . .
COPY --from=installer_yarn /usr/local/bin/yarn /usr/local/bin/yarn

# Install all package dependencies
RUN yarn install --frozen-lockfile

FROM base AS build

COPY . .
COPY --from=install_deps /app/node_modules ./node_modules
COPY --from=installer_yarn /usr/local/bin/yarn /usr/local/bin/yarn

# Set the environment variable
ENV NODE_ENV=production

# Run the build command for Next.js
RUN yarn build

FROM base AS development

COPY . .
COPY --from=installer_yarn /usr/local/bin/yarn /usr/local/bin/yarn

# Install git for yarn install to work in development
RUN apt-get update && apt-get install -y git \
    && apt-get clean

# Set the environment variable
ENV NODE_ENV=development

EXPOSE 3000

FROM base AS production

# Create a non-root user and group
RUN groupadd -r appgroup && useradd -r -g appgroup -d /app -s /sbin/nologin appuser

COPY --from=installer_yarn /usr/local/bin/yarn /usr/local/bin/yarn

# Remove unnecessary packages
RUN rm -rf /var/lib/apt/lists/*

# Set the environment variable
ENV NODE_ENV=production

# Copy the output from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Change ownership of /app directory to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Command to run the Next.js application
CMD ["yarn", "start"]

# Expose the port the app runs on
EXPOSE 3000
