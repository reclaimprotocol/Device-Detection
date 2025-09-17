export const DeviceType = {
    ANDROID: 'android',
    IOS: 'ios',
    DESKTOP: 'desktop',
    MOBILE: 'mobile'
} as const;

export type DeviceType = typeof DeviceType[keyof typeof DeviceType];