<?php
/**
 * Created by PhpStorm.
 * User: Fakedestinyck
 * Date: Jan/28/2019
 * Time: 16:18
 */
namespace App\Helpers;


class RsaUtil {

    private static function getPrivateKey($privateKey){
        return openssl_pkey_get_private($privateKey);
    }

    /**
     * 私钥加密
     */
    public static function privateEncrypt($data,$privateKey){
        if(!is_string($data)){
            return null;
        }
        return openssl_private_encrypt($data,$encrypted,self::getPrivateKey($privateKey))? base64_encode($encrypted) : null;
    }

    /**
     * 私钥解密
     */
    public static function privateDecrypt($encrypted,$privateKey)
    {
        if(!is_string($encrypted)){
            return null;
        }
        return (openssl_private_decrypt(base64_decode($encrypted), $decrypted, self::getPrivateKey($privateKey)))? $decrypted : null;
    }
}