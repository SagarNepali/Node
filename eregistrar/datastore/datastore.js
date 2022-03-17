/**
 * datastore.js
 *
 * @author
 * @since
 */
"use strict";

const dataStore = (function () {
  const registrationData = [
    {
      studentId: "000-11-0001",
      fullName: "Anna Lynn Smith",
      levelOfStudy: "Graduate",
    },
    {
      studentId: "000-11-0002",
      fullName: "Bob K. Jones",
      levelOfStudy: "Undergraduate",
    },
  ];

  const getData = function () {
    return registrationData;
  };

  const addData = function (data) {
    registrationData.push({
      studentId: data.studentId,
      fullName: data.fullName,
      levelOfStudy: data.levelOfStudy,
    });
  };
  return {
    getData: getData,
    addData: addData,
  };
})();

module.exports = dataStore;
