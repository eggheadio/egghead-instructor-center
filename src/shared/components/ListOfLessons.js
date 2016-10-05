import React from "react";
import ReactPaginate from 'react-paginate';
import Truncate from 'react-truncate';
import classnames from 'classnames'
import union from 'lodash/union'

export default class ListOfLessons extends React.Component {

  render() {
    const {lessons, selectedLesson, selectLesson, total, handlePageClick, currentPage} = this.props;

    const pageNum = Math.ceil(total / 5)


    return (
      <main className="mw6">
        <div id="react-paginate">
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageNum={pageNum}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={3}
                       initialSelected={currentPage}
                       clickCallback={(page) => {
                         handlePageClick(page.selected+1);
                       }}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"}/>
        </div>
        {lessons.map((lesson) => (
          <LessonListItem selectedLesson={selectedLesson}
                          lesson={lesson}
                          selectLesson={selectLesson}/>

        ))}
      </main>
    )
  }
}



class ReadMore extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};

    this.toggleLines = this.toggleLines.bind(this);
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      readMore: !this.state.readMore
    });
  }

  render() {
    let {children, text, lines} = this.props;

    return (
      <Truncate
        lines={this.state.readMore && lines}
        ellipsis={(
                   <span>... <a href='#' onClick={this.toggleLines}>{text}</a></span>
                )}
      >
        {children}
      </Truncate>
    );
  }
}

ReadMore.defaultProps = {
  lines: 3,
  text: 'Read more'
};

ReadMore.propTypes = {
  children: React.PropTypes.node.isRequired,
  text: React.PropTypes.node,
  lines: React.PropTypes.number
};


class LessonListItem extends React.Component {
  render() {
    const {lesson, selectedLesson, selectLesson} = this.props

    const selected = classnames({
      'bg-near-white': selectedLesson === lesson,
    })

    const allTags = union(
      lesson.language_list,
      lesson.framework_list,
      lesson.skillset_list,
      lesson.library_list,
      lesson.tool_list,
      lesson.platform_list
    ).join(', ')

    return (
      <div className={selected}>
        <a className="link dt w-100 bb b--black-10 dim blue" onClick={() => {
          selectLesson(lesson);
        }}>
          <div className="dtc w1 w3-ns v-mid pl2">
            <img className="f6 f5-ns fw6 lh-title black mv0"
                 src={lesson.icon_url}/>
          </div>
          <div className="dtc v-mid pa3">
            <h5 className="f6 f5-ns fw6 lh-title black mv0">
              {lesson.title}
            </h5>
            {lesson.series ? (
              <div className="f6 pt2">
                <span className="black-40">IN COURSE:</span> {lesson.series.title}
              </div>
            ) : null}


            <div className="f6 pt2 black-60">
              {allTags}
            </div>
          </div>

        </a>
      </div>
    )
  }
}