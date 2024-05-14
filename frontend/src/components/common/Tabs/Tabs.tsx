/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, cloneElement, memo, useState } from 'react';
import { TabsProps } from './types';
import {
  styleMapper,
  styleMapperBody,
  styleMapperHeader,
  styleMapperHeaderButton,
} from './styleMapper';
import { useDynamicStyles } from 'src/hooks';

const TabsComponent = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(props.currentTabId);

  const styles = useDynamicStyles(props, styleMapper);
  const headerStyles = useDynamicStyles(props, styleMapperHeader);
  const headerButtonStyles = useDynamicStyles(props, styleMapperHeaderButton);
  const bodyStyles = useDynamicStyles(props, styleMapperBody);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div id={props.id} className={props.className} aria-label={props.ariaLabel} style={styles}>
      <div style={headerStyles}>
        {props.tabs.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => handleTabClick(id)}
            style={{
              ...headerButtonStyles,
              fontWeight: id === activeTab ? 'bold' : 'normal',
              borderBottom: id === activeTab ? '2px solid var(--blue-grey)' : 'none',
            }}
          >
            {title}
          </button>
        ))}
      </div>
      <div style={bodyStyles}>
        {Children.map(props.children, (child: any) => {
          if (child.props.id === activeTab) {
            return cloneElement(child, { isActive: true });
          }
          return null;
        })}
      </div>
    </div>
  );
};

/**
 * Tabs component.
 * @param {TabsProps} props - Properties are shown below.
 * @property {ReactNode} children - The tab components.
 * @property {string} currentTabId - The current tab id.
 * @property {Tab[]} tabs - Array of tabs (Tab: { id: string, title: string }).
 * @property {string} [id] - An optional identifier for the card component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {string} [ariaLabel] - Label for component that can be beneficial for users of screen readers or other assistive technologies.
 * @property {string | number} [bodyPadding='16px 24px'] - Internal spacing within the card component's body.
 * @property {string | number} [headerPadding='16px 24px'] - Internal spacing within the card component's header.
 * @property {string | number} [margin='0'] - External spacing around the card component.
 * @property {string | number} [width='1fr'] - Width of the card.
 * @property {string | number} [bodyHeight='fit-content'] - Height of the card body.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the card component.
 * @property {CSSProperties} [additionalBodyStyles] - Additional inline styles to apply to the card component's body.
 * @property {CSSProperties} [additionalHeaderStyles] - Additional inline styles to apply to the card component's header.
 * @property {CSSProperties} [additionalHeaderButtonStyles] - Additional inline styles to apply to the card component's header buttons.
 */
export const Tabs = memo(TabsComponent);
