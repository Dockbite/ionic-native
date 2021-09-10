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
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin,
} from '@ionic-native/core';
import { Observable } from 'rxjs';

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
  plugin: 'ionic-cordova-plugin-plugindemo', // npm package name, example: cordova-plugin-camera
  pluginRef: 'PluginDemo', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/Dockbite/ionic-native.git', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class PluginDemo extends IonicNativePlugin {
  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  coolMethod(arg1: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
