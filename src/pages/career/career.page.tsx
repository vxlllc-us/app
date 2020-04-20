import React from "react";
import { RouteComponentProps } from "react-router-dom";
import _ from "lodash";

import { config, IJob } from "../../lib";
import "./career.scss";

const { jobs } = config;

interface IProps {
  id: string;
}
type Props = RouteComponentProps<IProps>;
interface IState {
  job: IJob | null;
}
export default class Career extends React.Component<Props, IState> {
  state: IState = {
    job: null
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const job: IJob = _.find(jobs, ["id", this.props.match.params.id]) as IJob;
    this.setState({
      job
    });
  }

  renderJobDetails = () => {
    if (this.state.job) {
      return (
        <>
          <h1 className="job-title">{this.state.job.title}</h1>
          {this.state.job.preface && (
            <div className="job-preface">{this.state.job.preface}</div>
          )}
          <div className="job-requirements">
            <ul>
              {this.state.job.requirements.map((req: string) => {
                return <li>{req}</li>;
              })}
            </ul>
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <div className="career-root">
        <div className="container">{this.renderJobDetails()}</div>
      </div>
    );
  }
}
