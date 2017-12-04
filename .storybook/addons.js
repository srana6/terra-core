import '@storybook/addon-actions/register';
import '@storybook/addon-options/register';
import addonAPI from '@storybook/addons';

addonAPI.register('terra/options', (storybookAPI) => {
  var fullscreen = false;
  window.toggleFullScreen = function () {
    fullscreen = !fullscreen;
    storybookAPI.setOptions({goFullScreen: fullscreen})
  }
});
