import { KJUR } from 'jsrsasign';
// https://www.npmjs.com/package/jsrsasign

export function generateSignature(sdkKey, sdkSecret, sessionName, role, sessionKey, userIdentity) {
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2;
  const oHeader = { alg: 'HS256', typ: 'JWT' };

  const oPayload = {
    app_key: sdkKey,
    tpc: sessionName,
    role_type: role,
    session_key: sessionKey,
    user_identity: userIdentity,
    version: 1,
    iat: iat,
    exp: exp
  };

  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);
  const sdkJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, sdkSecret);
  return sdkJWT;
}

export function isSupportWebCodecs() {
  return typeof MediaStreamTrackProcessor === 'function';
}

export function isAndroidBrowser() {
  return /android/i.test(navigator.userAgent);
}

export function isSupportOffscreenCanvas() {
  return typeof OffscreenCanvas === 'function';
}

export function generateRandomName(length) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let randomName = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomName += alphabet[randomIndex];
  }

  return randomName;
}
export function generateRandomUsername(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  let randomUsername = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomUsername += characters[randomIndex];
  }

  return randomUsername;
}
