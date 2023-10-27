import Logo from 'src/assets/images/logo.png';
import LogoHighRes from 'src/assets/images/logo-2x.png';

export const SITE_DATA = {
  url: 'www.flavorflicks.com',
  title: 'Flavor Flicks',
  logo: Logo,
  logoHighRes: LogoHighRes,
  support: {
    mail: 'support@flavorflicks.com',
    phone: '061 9876 5432'
  },
  address: {
    line1: 'SCO-45, Ground Floor',
    line2: 'Bhupindra Road, Model Town',
    city: 'Patiala, India, 147001'
  },
  socials: [
    {
      type: 'facebook',
      url: 'https://www.facebook.com/FlavorFlicks'
    },
    {
      type: 'twitter',
      url: 'https://twitter.com/flavor_flicks'
    },
    {
      type: 'instagram',
      url: 'https://www.instagram.com/flavorflicks/'
    },
    {
      type: 'zomato',
      url: 'https://www.zomato.com/patiala/flavor-flicks-urbanestate-patiala/info'
    },
    {
      type: 'swiggy',
      url: 'https://www.swiggy.com/restaurants/flavor-flicks-urbanestate-patiala'
    },
  ],
  timings: {
    online: '24/7',
    offline: [
      {
        day1: 'Monday',
        day2: 'Friday',
        range: [
          {
            type: 'Breakfast',
            time: '8.00AM to 10.00AM'
          },
          {
            type: 'Lunch/Dinner',
            time: '11.00AM to 10.00PM'
          }
        ]
      },
      {
        day1: 'Saturday',
        day2: 'Sunday',
        range: [
          {
            type: 'Breakfast',
            time: '10.00AM to 11.00AM'
          },
          {
            type: 'Lunch/Dinner',
            time: '11.00AM to 12.00PM'
          }
        ]
      }
    ]
  },
  apps: [
    {
      type: 'playstore',
      url: ''
    },
    {
      type: 'appstore',
      url: ''
    }
  ]
};
