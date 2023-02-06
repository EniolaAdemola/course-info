import React, { useMemo, useState } from 'react'
import { coursesDetails } from '../../assets/couresDetails'
import {BsSearch} from "react-icons/bs"
import "./search-info.scss"

const SearchInfo = () => {
  const [query, setQuery] = useState("")

  const filteredCourse = coursesDetails.filter(useMemo(() => ({courseCode}) => {
    return  courseCode.toLowerCase().includes(query.toLowerCase())
  }, [query, coursesDetails]))

  return (
      <div className='container search__container'>
        <input className='search__box' value={query} onChange = {e => setQuery(e.target.value)} placeholder="Search for a course code(CIT 111) . . ." type="search"/>
        <div className="search__icon">
          <BsSearch />
        </div>
        <div className='search__result'>
        <table className='search__result-table'>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Lecturer</th>
              <th>Unit</th>
              {/* <th>Course Day</th>
              <th>Course Time</th> */}
            </tr>
          </thead>
          <tbody>
          {query !== "" && filteredCourse.map(({id, courseCode, courseTitle, lecturer, unit, courseDay, courseTime}) => {
            return (
                <tr key={id}>
                  <td>{courseCode}</td>
                  <td>{courseTitle}</td>
                  <td>{lecturer}</td>
                  <td>{unit}</td>
                  {/* <td>{courseDay}</td>
                  <td>{courseTime}</td> */}
                </tr>
            )
          })}
          </tbody>
        </table>
        </div>
      </div>
  )
}

export default SearchInfo