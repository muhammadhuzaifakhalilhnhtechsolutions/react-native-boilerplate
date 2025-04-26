import {Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  requestMultiple,
  checkMultiple,
} from 'react-native-permissions';

export const requestReadWritePermissions = async () => {
  try {
    let permissions;

    if (Platform.OS === 'android') {
      const androidVersion = parseInt(Platform.Version, 10);

      if (androidVersion >= 33) {
        permissions = [PERMISSIONS.ANDROID.READ_MEDIA_IMAGES];
      } else {
        permissions = [
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        ];
      }
    } else if (Platform.OS === 'ios') {
      permissions = [
        PERMISSIONS.IOS.PHOTO_LIBRARY,
        PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
      ];
    }

    const statuses = await checkMultiple(permissions);

    const results = await requestMultiple(
      permissions.filter(
        permission => statuses[permission] !== RESULTS.GRANTED,
      ),
    );

    const deniedPermissions = Object.entries(results).filter(
      ([, status]) => status !== RESULTS.GRANTED,
    );

    if (deniedPermissions.length === 0) {
      return {success: true, message: 'All permissions granted'};
    } else {
      return {
        success: false,
        message: 'Some permissions were denied',
        denied: deniedPermissions.map(([permission]) => permission),
      };
    }
  } catch (error) {
    console.error('Error requesting permissions:', error);
    return {success: false, message: 'Error requesting permissions', error};
  }
};
