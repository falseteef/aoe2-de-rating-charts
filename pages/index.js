import React, { Component } from "react";

import ApiCaller from "../helpers/api-caller.js";
import Page from "../components/page.js";

export default class extends Component {
  render() {
    return (
      <Page
        {...this.props}
        title="Random Map Ratings"
        chartOneLabel="1v1 Random Map"
        chartTwoLabel="Team Random Map"
        chartAltLink="/deathmatch"
        chartAltLinkText="Deathmatch"
      ></Page>
    );
  }
}

/**
 * This function only gets called when the page is built. It does not become a part of the web page.
 * The return value of this function is sent to the React component above as props.
 *
 * <Page {...this.props} altLink="Deathmatch"></Page>
 */
export async function getStaticProps(context) {
  let apiCaller = new ApiCaller();
  return await apiCaller.getApiData(3, 4);
}
