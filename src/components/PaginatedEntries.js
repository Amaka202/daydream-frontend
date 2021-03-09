import React, { Component } from 'react';
import Axios from 'axios';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { getEntries } from '../store/actions/entriesActions';

class PaginatedEntries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            currentPageElements: [],
            elementsPerPage: 10,  //change as per your need
            pagesCount: 1,
            allElements: [],
            totalElementsCount: 0
        }
    }

    componentDidMount() {
        this.getAllElements();
    }

    // componentDidUpdate(prevProps){
    //     console.log('hey there');
    //     console.log(this.props.entries);
    //     console.log(prevProps.entries);
    //     if(this.props.entries !== prevProps.entries){
    //         this.setState({
    //             allElements: this.props.entries,
    //             totalElementsCount: this.props.entries.length
    //         }, () => {
    //             this.setPaginationStates();
    //         });
    //         console.log(this.state.allElements);
    //         console.log('hey');
    //      }
    //     }

    async getAllElements() {
        const allElements = await this.props.getEntries();
        const time = await this.props.time
        this.setState({
            allElements: this.props.entries,
            totalElementsCount: this.props.entries.length
        }, () => {
            this.setPaginationStates();
        });
    }

    setPaginationStates = () => {
        const { totalElementsCount, elementsPerPage } = this.state;
        this.setState({
            pagesCount: Math.ceil(totalElementsCount / elementsPerPage)
        }, () => {
            this.setElementsForCurrentPage();
        });
    }

    setElementsForCurrentPage = () => {
        const { allElements, offset, elementsPerPage } = this.state;
        const currentPageElements = allElements.slice(offset, offset + elementsPerPage);
        this.setState({
            currentPageElements
        });
    }

    handlePageClick = (pageNumber) => {
        const { elementsPerPage } = this.state;
        const currentPage = pageNumber - 1;
        const offset = currentPage * elementsPerPage;
        this.setState({
            offset
        }, () => {
            this.setElementsForCurrentPage();
        });
    }

    render() {
        const { totalElementsCount, pagesCount, elementsPerPage } = this.state;
        return (
            <div>
                <h1>Pagination Tutorial</h1>
                {this.state.currentPageElements.map(val => {
                    return <p>{val.body}</p>
                })}
                
                {
                    pagesCount > 1 &&
                    <Pagination
                        defaultCurrent={1}
                        onChange={this.handlePageClick}
                        size="small"
                        total={totalElementsCount}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        pageSize={elementsPerPage}
                        showSizeChanger={false}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        entries: state.entries.entriesData,
        time: state.entries.time,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        getEntries: () => dispatch(getEntries())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(PaginatedEntries);