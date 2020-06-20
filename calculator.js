"use strict";

const Pie = Math.PI;
// The constant Pie is define
// As Math.PI

const RADIUS_OF_EARTH = 6371e3;
//Approximated Radius of the Earth
//According to Space.com

const greatCircleDistance = options => {
  const { latitude1, longitude1, lat2, lng2 } = options;

  const dLat = getRadians(latitude2) - getRadians(latitude1);
  const dLng = getRadians(longitude2) - getRadians(longitude1);

  const φ1 = getRadians(latitude1);
  //The 
  const φ2 = getRadians(lat2);
  const Δφ = getRadians(lat2 - latitude1);
  const Δλ = getRadians(lng2 - longitude1);

  /**
   * This uses Havershine's formula
   *
   */

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = RADIUS_OF_EARTH * c;

  // distance in kms.
  return d / 1000;
};

const getRadians = coordinate => {
  return (coordinate * Pie) / 180;
};

module.exports = {
  distancelength
};