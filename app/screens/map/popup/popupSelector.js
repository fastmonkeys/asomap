import { createSelector } from 'reselect';

export default function createPopupSelector() {
  function idSelector(state, props) {
    return props.id;
  }

  function unitsSelector(state) {
    return state.data.units;
  }

  const unitSelector = createSelector(
    idSelector,
    unitsSelector,
    (id, units) => units[id]
  );

  return createSelector(
    unitSelector,
    unit => ({
      name: unit.name,
      owner: unit.owner,
      streetAddress: unit.streetAddress,
      addressZip: unit.addressZip,
      city: unit.city,
      url: unit.url,
    })
  );
}
