import Section from './components/Section';
import Card from './components/Card';
import WaveDivider from './components/WaveDivider';
// import { Button, Icon } from '@vizality/components';
import { webpackModules } from '@cumcord/modules';

export default React.memo(() => {
  const { getCurrentUser } = webpackModules.findByProps('getCurrentUser');
  const { username } = getCurrentUser();

  return (
    <>
      <Section className='vz-dashboard-home-section-cta'>
        <div className='vz-dashboard-home-cta'>
          <div className='vz-dashboard-home-cta-overlay-background'>
            <div className='vz-dashboard-home-cta-background' />
          </div>
          <div className='vz-dashboard-home-cta-content'>
            {/* <Icon
              className='vz-dashboard-home-cta-content-icon-wrapper'
              iconClassName='vz-dashboard-home-cta-content-icon'
              name='Vizality'
              size='100%'
            /> */}
            <div className='vz-dashboard-home-cta-content-header-wrapper'>
              <h1 className='vz-dashboard-home-cta-content-header'>Welcome, {username}!</h1>
              <h3 className='vz-dashboard-home-cta-content-description'>
                You've made the right choice. The power of customization is now at your fingertips. Check out the features below to learn how to harness your newfound power.
              </h3>
            </div>
          </div>
          {/* <Icon
            className='vz-dashboard-home-cta-icon-wrapper'
            name='PersonWaving'
            size='100%'
          /> */}
          <WaveDivider />
        </div>
      </Section>
      <Section className='vz-dashboard-home-section-features'>
        <div className='vz-dashboard-home-features-wrapper'>
          <div className='vz-dashboard-home-features'>
            <Card
              icon='Plugin'
              header='Discover Plugins'
              description='Explore our vast collection of official plugins. Plugins can add just about any new feature you can imagine to Discord.'
              buttonText='Browse Plugins'
              route='/vizality/plugins/browse'
            />
            <Card
              icon='Theme'
              header='Discover Themes'
              description='Explore our vast collection of official themes. Themes can change just small portions of the app or they can be full-blown redesigns.'
              buttonText='Browse Themes'
              route='/vizality/themes/browse'
            />
            <Card
              icon='UnknownUser'
              header='Become a Developer'
              description='Find out what it takes to start making your own plugins and themes. Come check out the guidelines and all the info you need to become an addon developer for Vizality.'
              buttonText='Learn How'
              route='/vizality/development'
            />
            <Card
              icon='Science'
              header='Read the Docs'
              description='Read about all the building blocks and tools we provide to make building plugins and themes easier for you.'
              buttonText='Start Reading'
              route='/vizality/docs'
            />
          </div>
        </div>
      </Section>
    </>
  );
});