import { webpackModules } from '@cumcord/modules';

const Button = webpackModules.findByDisplayName('DropdownButton');

// import { Icon } from '..';

export default React.memo(({ icon, header, disabled, description, buttonText, buttonOnClick, route }) => {
  return (
    <div className='vz-dashboard-home-features-card-wrapper'>
      <div className='vz-dashboard-home-features-card'>
        {/* <Icon
          name={icon}
          className='vz-dashboard-home-features-icon-wrapper'
          iconClassName='vz-dashboard-home-features-icon'
          size='100%'
        /> */}
        <div className='vz-dashboard-home-features-card-header'>
          {header}
        </div>
        <div className='vz-dashboard-home-features-card-body'>
          {description}
        </div>
        <div className='vz-dashboard-home-features-card-footer'>
          <Button
            className='vz-dashboard-home-features-button'
            children={buttonText}
          >
          </Button>
        </div>
      </div>
    </div>
  );
});