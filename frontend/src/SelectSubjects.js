import React from 'react';

import axios from 'axios';

import { withRouter } from 'react-router-dom';

class SelectSubjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      subjectYear: null,
    }
    this.decideSubjectsAndYear = this.decideSubjectsAndYear.bind(this);
  }

  decideSubjectsAndYear(pk, name) {
    let years = [];

    axios
      .get(`/api/exams/?subject=${pk}`)
      .then(response => {
        for (let i = 0; i < response.data.results.length; i++) {
          years.push(response.data.results[i].year);
        }
        let year = Math.max.apply(null, years);
        this.props.setSubjectName(name);
        this.props.setSubjectYear(year);
        // ページ遷移
        this.props.history.push(`/exam/${name}/${year}`)
      })
      .catch(err => {
        console.log(err);
      })

  }

  componentDidMount() {
    axios
      // .get('/api/subjects')
      .get('/api/subjects/?offset=80')
      .then(subjectsResponse => {
        let subjects = [];
        for (let i = 0; i < subjectsResponse.data.results.length; i++) {
          subjects.push(subjectsResponse.data.results[i])
        }
        this.setState({
          subjects: subjects
        })
        console.log(subjects)
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="SelectSubjects">
        {this.state.subjects.map((subject, index) =>
          <p key={index} onClick={() => this.decideSubjectsAndYear(subject.pk, subject.name)}>
            {/* <Link to={`/exam/${subject.name}/${subject.year}`} onClick={() => this.decideSubjectsAndYear(subject.name, subject.year)}> */}
            {/* {subject.name} */}
            {/* </Link> */}
            {subject.name}
          </p>
        )}
      </div>
    )
  }
}

export default withRouter(SelectSubjects);