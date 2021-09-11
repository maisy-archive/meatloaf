import { webpackModules } from '@cumcord/modules';

const Divider = webpackModules.findByDisplayName('FormDivider')
// import { Icon } from '@vizality/components';

/**
 * Dashboard section header.
 * @component
 * @param {string|React.Component|function(): React.ReactElement} [header] Section header
 * @param {string|React.Component|function(): React.ReactElement} [description] Section description
 * @returns {React.React.memoExoticComponent<function(): React.ReactElement>}
 */
export const Header = React.memo(({ icon, header, description, separator, collapsible }) => {
  const { headerSubtext } = webpackModules.findByProps('headerSubtext');
  const { marginBottom40 } = webpackModules.findByProps('marginBottom40');
  const { content } = webpackModules.findByProps('wrappedLayout');
  const { h1 } = webpackModules.findByProps('h1', 'h2', 'h3');
  const { size24 } = webpackModules.findByProps('size24');
  const { base } = webpackModules.findByProps('base');
  return (
    <div className='vz-dashboard-section-header-wrapper'>
      <div className='vz-dashboard-content-header-inner-wrapper'>
        {/* {icon && (
          <Icon
            className='vz-dashboard-section-header-icon-wrapper'
            iconClassName='vz-dashboard-section-header-icon'
            name={icon}
            size='100%'
          />
        )} */}
        <h2 className='vz-dashboard-section-header size24, base, content'>
          {header}
        </h2>
      </div>
      {description && (
        <h4 className='vz-dashboard-section-header-description h1 headerSubtext' >
          {description}
        </h4>
      )}
      {separator && (
        <Divider />
      )}
    </div>
  );
});

/**
 * Dashboard content section.
 * @component
 * @param {string|React.Component|function(): React.ReactElement} [header] Section header
 * @param {string|React.Component|function(): React.ReactElement} [description] Section description
 * @param {string} [className] Section class
 * @param {...any} [children] Section children
 * @returns {React.React.memoExoticComponent<function(): React.ReactElement>}
 */
export default React.memo(({ header, description, icon, separator = true, collapsible = false, id, className, children }) => {
  return (
    <div className={'vz-dashboard-section' + className}>
      {header && (
        <Header header={header} description={description} icon={icon} separator={separator} collapsible={collapsible} />
      )}
      <div className='vz-dashboard-section-contents'>
        {children}
      </div>
    </div>
  );
});