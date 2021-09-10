/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Plugin Demo
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { PluginDemo } from '@ionic-native/plugin-demo';
 *
 *
 * constructor(private pluginDemo: PluginDemo) { }
 *
 * ...
 *
 *
 * this.pluginDemo.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'PluginDemo',
  plugin: 'com.dockbite.plugindemo', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.PluginDemo', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/Dockbite/cordova-plugin-plugindemo.git', // the github repository URL for the plugin
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class PluginDemo extends IonicNativePlugin {
  @Cordova()
  coolMethod(arg1: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
