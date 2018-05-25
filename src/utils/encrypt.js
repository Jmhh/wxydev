import CryptoJS from 'crypto-js'

//加密
const  encryptAes = (str, key, iv) => {
    var encrypted = CryptoJS.AES.encrypt(str, key, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
};

//解密
const  decryptAes = (str, key, iv) =>  {
    var decrypted = CryptoJS.AES.decrypt(str, key, {iv: iv, padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypted);//decrypted.toString(CryptoJS.enc.Utf8);
};


export default {
    encryptAes,
    decryptAes,
}
