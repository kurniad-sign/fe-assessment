'use client';

import { ForwardedRef, HTMLAttributes, useEffect, useRef } from 'react';
import FocusTrap from 'focus-trap-react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

import { fixedForwardRef } from '@/components/helpers';
import useMountTransition from '@/hooks/useMountTransition';
import { cn } from '@/utils/helpers';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  removeWhenClosed?: boolean;
  width?: number;
} & HTMLAttributes<HTMLDivElement>;

function createPortalRoot() {
  const drawerRoot = document.createElement('div');
  drawerRoot.setAttribute('id', 'drawer-root');

  return drawerRoot;
}

const UnwrappedDrawer = (props: DrawerProps, ref: ForwardedRef<any>) => {
  const {
    children,
    className,
    isOpen,
    onClose,
    position = 'right',
    removeWhenClosed,
    width = 400,
  } = props;

  const isTransitioning = useMountTransition(isOpen, 300);

  const bodyRef = useRef<HTMLBodyElement | null>(
    document.querySelector('body')
  );
  const portalRootRef = useRef(
    document.getElementById('drawer-root') || createPortalRoot()
  );

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.appendChild(portalRootRef.current);
      const portal = portalRootRef.current;
      const bodyEl = bodyRef.current;

      return () => {
        portal.remove();
        bodyEl.style.overflow = '';
      };
    }
  }, []);

  useEffect(() => {
    const updatePageScroll = () => {
      if (bodyRef.current) {
        bodyRef.current.style.overflow = isOpen ? 'hidden' : '';
      }
    };

    updatePageScroll();
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = ({ key }: KeyboardEvent) =>
      key === 'Escape' && onClose();

    if (isOpen) {
      window.addEventListener('keyup', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('keyup', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }

  return createPortal(
    <FocusTrap active={isOpen}>
      <div
        ref={ref}
        aria-hidden={isOpen ? 'false' : 'true'}
        className={cn({
          className,
        })}
      >
        <div
          role="dialog"
          className={cn(
            'fixed z-[999] h-full overflow-auto bg-background p-6 shadow-md transition-transform duration-300',
            {
              'left-0 top-0 -translate-x-full transform': position === 'left',
              'right-0 top-0 translate-x-full transform': position === 'right',
              'translate-x-0':
                (position === 'left' && isOpen && isTransitioning) ||
                (position === 'right' && isOpen && isTransitioning),
              'shadow-lg': isOpen,
            }
          )}
          style={{
            width,
          }}
        >
          <button
            style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}
            tabIndex={0}
            aria-hidden="true"
          >
            Hidden Fallback
          </button>
          <button
            type="button"
            className="absolute right-4 top-4 rounded-md opacity-70 hover:opacity-100 focus:outline-none disabled:pointer-events-none"
            onClick={onClose}
          >
            <X size={18} />
          </button>
          {children}
        </div>
        <div
          className={cn(
            [
              'pointer-events-none invisible fixed inset-0 z-0 h-full w-full bg-[rgba(0,0,0,0.5)] opacity-0 transition-opacity duration-300 ease-in',
            ],
            {
              'pointer-events-auto visible z-[100] opacity-100': isOpen,
            }
          )}
          onClick={onClose}
        />
      </div>
    </FocusTrap>,
    portalRootRef.current
  );
};

export const Drawer = fixedForwardRef(UnwrappedDrawer);
