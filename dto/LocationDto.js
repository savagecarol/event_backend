/**
 * LocationDto will be used to persist Location data for various usecases like userOnboarding, new Event Post etc.
 */

class LocationDto {
    constructor(
        latitude,
        longitude
    ) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

module.exports = LocationDto;