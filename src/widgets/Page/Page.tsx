import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollTopPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollTopPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(uiActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
  }, 500);

  return (
    <section onScroll={onScroll} ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}

      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </section>
  );
};
