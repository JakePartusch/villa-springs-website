import React from "react";

const ContactEntry = ({heading, phone, email}) =>
  <div>
    <h4 className="f4 b lh-title mb2 primary">{ heading }</h4>
    <p>{ phone }</p>
    <p>{ email }</p>
  </div>;

const ContactEntries = ({data}) => data && data.length > 0
    ? <div className="mb3">
      {data.map(({heading, phone, email}) => <ContactEntry heading={heading} phone={phone} email={email}/>)}
    </div>
    : "";
const Director = ({name, elect}) =>
    <div>
      <h4 className="f4 b lh-title mb2 primary">{ heading }</h4>
      <p>{ phone }</p>
      <p>{ email }</p>
    </div>;
  
const Directors = ({data}) => data && data.length > 0
    ? <div className="mb3">
      {data.map(({name, elect}) => <Director name={name} elect={elect}/>)}
    </div>
    : "";

export default class ContactPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryContactEntries = entry.getIn(["data", "contact_entries"]);
    const contactEntries = entryContactEntries ? entryContactEntries.toJS() : [];
    const entryDirectors = entry.getIn(["data", "board_of_directors"]);
    const directors = entryDirectors ? entryDirectors.toJS() : [];
    return <div className="ph3 bg-off-white">
      <img src={getAsset(entry.getIn(["data", "logo"]))} alt="" className="db w4 center pv4" />
      <div className="center mw6 pv3">
        { widgetFor("body") }
        <ContactEntries data={contactEntries} />
        <Directors data={directors}/>
      </div>
    </div>;
  }
}
