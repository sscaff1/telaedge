import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="row">
            <div className="form-group col-sm-6">
              <input type="text" ref="name" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group col-sm-6">
              <input type="email" ref="email" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <textarea className="form-control" rows="3" ref="comments" placeholder="Comments"></textarea>
            </div>
          </div>
          <br/>
          <div className="row text-center">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  submitForm(event) {
    event.preventDefault();
    const values = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      comments: this.refs.comments.value,
    }
    Meteor.call('sendContactEmail', values);
  }
}

export default ContactForm;
