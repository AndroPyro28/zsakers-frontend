import React, {useRef} from 'react'
import {FilterContainer} from "./components"
function FilterData({ dateSetter }: any) {
  const {setFilterDateFrom, setFilterDateTo} = dateSetter;
  const Date1Ref = useRef<any>();
  const Date2Ref = useRef<any>();
  return (
    <FilterContainer>
      from
        <input type="date" ref={Date1Ref} onChange={(e) => setFilterDateFrom(e.target.value)} />
        to
        <input type="date" ref={Date2Ref} onChange={(e) => setFilterDateTo(e.target.value)} />
    </FilterContainer>
  )
}

export default FilterData