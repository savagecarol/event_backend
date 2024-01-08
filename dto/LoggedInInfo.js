/**
 * LoggedInInfoDto will be used to store the logi status and details of users including device type and its details
 */

class LoggedInInfoDto {
    construtor(
        logInStatus,
        deviceTypeEnum,
        deviceDetails
    ) {
        this.logInStatus = logInStatus;
        this.deviceTypeEnum = deviceTypeEnum;
        this.deviceDetails = deviceDetails;
    }
}

module.exports = LoggedInInfoDto;