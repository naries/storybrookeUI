import React, { Component } from 'react'
import InputButton from './InputButton'

export default class CreatePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            author: 'mayokun',
            error: ''
        }

        this._setFormTitle = this._setFormTitle.bind(this)
        this._setFormContent = this._setFormContent.bind(this)
        this._formSubmit = this._formSubmit.bind(this)
    }

    _setFormTitle(event) {
        this.setState({title: event.target.value})
    }

    _setFormContent(event) {
        this.setState({content: event.target.value})
    }

    _formSubmit(event) {
        event.preventDefault()
        if(this._checkError()) {
            this.props.replaceLoading()
            setTimeout(()=>this.props.replaceLoading(), 3000)
        }
    }

    _unsetError = () => {
        this.setState({error: ''})
    }

    _setError = (which="title") => {
        if(which==='title') {
            this.setState({'error': 'Title not long enough!'})
        } else {
            this.setState({'error': 'Story not long enough!'})
        }
    }

    _checkError() {
        if(this.state.title === '' || this.state.title.length < 4) {
            this._setError('title')
            return false

        } 
        if(this.state.content === '' || this.state.content.length < 4) {
            this._setError('content')
            return false
        }

        return true
    }

  render() {
    return (
        <div className="bg-white transition duration-150 ease-linear cursor-pointer hover:border-gray-500 rounded-sm border border-gray-300 my-4">
        {!this.props.loading 
        ? (<form onSubmit={this._formSubmit}>
        <div>
            <div className="flex flex-wrap flex-row w-full h-16 p-2 justify-between">
                <div className="flex flex-wrap flex-row">
                    <div className="ml-2 h-12 w-12 bg-gray-400 rounded-full"></div>
                    <div className="flex flex-wrap content-center font-bold h-full ml-4 text-left">Username</div>
                </div>
            </div>
            <div className="">
                <div className="m-4 text-left text-xl font-medium">
                    <input 
                        value={this.state.title}
                        className="p-2 w-full" 
                        placeholder="Title of your story" 
                        onChange={this._setFormTitle}
                        onFocus={this._unsetError}
                    />
                </div>
            <div className="text-left mt-4 ml-4 mr-4">
                <textarea 
                    className="w-full p-2" 
                    placeholder="Write your story here!"
                    rows={5} 
                    resize="none"
                    value={this.state.content}
                    onChange={this._setFormContent}
                    onFocus={this._unsetError}
                    />
            </div>
            </div>
            {this.state.error !== '' && <div className="text-red-500 text-sm font-medium text-left px-8">
                {this.state.error}
            </div>}
            <div className="mx-8 my-2">
                <InputButton title="Create Story"/>
            </div>
        </div> 
        </form>)
        :<div className="py-1 text-sm font-sans bg-blue-700 text-white cursor-not-allowed border border-transparent ">Creating your story. Please Wait!</div>}
        </div>
    )
  }
}