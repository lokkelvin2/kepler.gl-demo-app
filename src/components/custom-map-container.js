//https://github.com/keplergl/kepler.gl/issues/1407
// Replace default Attribution in kepler.gl/components/map-container

import React from 'react';
import styled from 'styled-components';
import {MapContainerFactory} from 'kepler.gl/components';

const StyledCustomMapContainer = styled.div`
  .mapbox-attribution-container {
    display: none;
  }
`;

export const Attribution = () => <div>My own attrition...</div>;

// export const Attribution = () =>
//     /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledAttrbution, null, /*#__PURE__*/_react["default"].createElement("div", {
//       className: "attrition-logo"
//     }, "Basemap by:", /*#__PURE__*/_react["default"].createElement("a", {
//       className: "mapboxgl-ctrl-logo",
//       target: "_blank",
//       rel: "noopener noreferrer",
//       href: "https://www.mapbox.com/",
//       "aria-label": "Mapbox logo"
//     })), /*#__PURE__*/_react["default"].createElement("div", {
//       className: "attrition-link"
//     }, /*#__PURE__*/_react["default"].createElement("a", {
//       href: "https://kepler.gl/policy/",
//       target: "_blank",
//       rel: "noopener noreferrer"
//     }, "\xA9 kepler.gl |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
//       href: "https://www.mapbox.com/about/maps/",
//       target: "_blank",
//       rel: "noopener noreferrer"
//     }, "\xA9 Mapbox |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
//       href: "http://www.openstreetmap.org/copyright",
//       target: "_blank",
//       rel: "noopener noreferrer"
//     }, "\xA9 OpenStreetMap |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
//       href: "https://www.mapbox.com/map-feedback/",
//       target: "_blank",
//       rel: "noopener noreferrer"
//     }, /*#__PURE__*/_react["default"].createElement("strong", null, "Improve this map"))));
  

const CustomMapContainerFactory = (...deps) => {
  const MapContainer = MapContainerFactory(...deps);

  const CustomMapContainer = props => {
    return (
      <StyledCustomMapContainer>
        <MapContainer {...props} />
            <Attribution style={{position: 'absolute', bottom: 0, right: 0}} />            
      </StyledCustomMapContainer>
    );
  };

  return CustomMapContainer;
};

CustomMapContainerFactory.deps = MapContainerFactory.deps;
export default CustomMapContainerFactory;