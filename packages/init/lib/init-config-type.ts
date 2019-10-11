import is from 'is';

export enum EEnvironment {
  React = 'react',
  Node = 'node',
}

/**
 * 初始化项目配置的类型
 * @export
 * @interface IFInitConfig
 */
export interface XXXInitConfig {
  /**
   * 项目的环境类型
   * @type {EEnvironment} 初始化项目为指定环境
   *
   * 例：
   *
   *  设置为react，则会将项目初始化为react的开发环境
   * @memberof IFInitConfig
   */
  enviroment: EEnvironment;
}

/**
 * 获取默认的配置
 * @export
 * @returns {IFInitConfig} 初始化配置
 */
export function getDefaultInitConfig(): XXXInitConfig {
  return {
    enviroment: EEnvironment.React,
  };
}

/**
 * 将uncheckedEnv转换成有效的EEnvironment值
 * @export
 * @param {*} uncheckedEnvironment 待验证的任意值
 * @returns {EEnvironment} 有效的EEnvironment值
 */
export function getValidEnvironment(uncheckedEnvironment: any): EEnvironment {
  if (is.string(uncheckedEnvironment)) {
    switch (uncheckedEnvironment) {
      case EEnvironment.React:
      case EEnvironment.Node:
        return uncheckedEnvironment as EEnvironment;

      default:
        return EEnvironment.React;
    }
  }

  return EEnvironment.React;
}
