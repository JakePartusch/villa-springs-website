import React from "react";

const DocumentEntry = ({heading, link}) =>
  <div>
    <a className="f4 b lh-title mb2 primary" href={link}>{ heading }</a>
  </div>;

const DocumentEntries = ({data}) => data && data.length > 0
    ? <div className="mb3">
      {data.map(({heading, link}) => <DocumentEntry heading={heading} link={link} />)}
    </div>
    : "";

export default class DocumentPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryDocumentEntries = entry.getIn(["data", "document_entries"]);
    const documentEntries = entryDocumentEntries ? entryDocumentEntries.toJS() : [];
    return <div className="ph3 bg-off-white">
      <img src={getAsset(entry.getIn(["data", "logo"]))} alt="" className="db w4 center pv4" />
      <div className="center mw6 pv3">
        <DocumentEntries data={documentEntries} />
        { widgetFor("body") }
      </div>
    </div>;
  }
}
