import React from 'react'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'

import {fetchInstructor} from './services/instructor-service'

import InstructorNav from './components/InstructorNav'
import InstructorRoutes from './components/InstructorRoutes'

class Instructor extends React.Component {
  state = {}

  loadInstructor(instructor_id) {
    fetchInstructor(instructor_id).then((instructor) => {
      this.setState({instructor})
    })
  }

  componentWillReceiveProps(nextProps) {
    // ultra jank!
    const {instructor_id} = nextProps.params
    this.loadInstructor(instructor_id)
  }

  componentWillMount() {
    const {instructor_id} = this.props.params
    this.loadInstructor(instructor_id)
  }

  render() {
    const {pathname} = this.props
    const {instructor} = this.state // where the instructor gets loaded is weird right now, you'd
                                    // likely either BE the instructor, or you'd click through a list
                                    // of instructors (as an admin). Redux? MobX?

    return (
      <div>
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 fw6 ttu tracked">
            <Link to="/instructors/john-lindquist" className="link dim white dib mr3">John</Link>
            <Link to="/instructors/joel-hooks" className="link dim white dib mr3">Joel</Link>
            <Link to="/instructors/trevor-miller" className="link dim white dib mr3">Trevor</Link>
          </nav>
        </header>

        { instructor ?
        <main className="pa3 pa5-ns bt b--black-10 black-70 bg-white">
          <InstructorNav pathname={pathname} />
          <InstructorRoutes instructor={instructor} {...this.props} />
        </main>
          : null
        }
        <Miss component={() => null}/>
      </div>

    )
  }
}

Instructor.propTypes = {
  params: React.PropTypes.object.isRequired,
  pathname: React.PropTypes.string.isRequired
}

export default Instructor