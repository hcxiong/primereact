import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputText} from '../../components/inputtext/InputText';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class InputTextDemo extends Component {
        
    constructor() {
        super();
        this.state = {
            value: null
        };
    }

    toggle() {
        this.setState({disabled: !this.state.disabled});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputText</h1>
                        <p>InputText is an extension to standard input element with theming and keyfiltering.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <InputText onChange={(e) => this.setState({value: e.target.value})}/>
                    <span style={{marginLeft:'.5em'}}>{this.state.value}</span>

                    <h3>Floating Label</h3>
                    <span className="ui-float-label">
                        <InputText id="float-input" type="text" size="30" />
                        <label htmlFor="float-input">Username</label>
                    </span>

                    <h3>KeyFilter</h3>
                    <InputText type="text" keyfilter="pint" />
                </div>

                <InputTextDoc />
            </div>
        )
    }
}

class InputTextDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {InputText} from 'primereact/inputtext';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
<CodeHighlight className="language-jsx">
{`
<InputText value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />

`}
</CodeHighlight>

                        <h3>Float Label</h3>
                        <p>A floating label is implemented by wrapping the input and the label inside a container having <i>.ui-float-label</i> style class.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<span className="ui-float-label">
    <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlFor="in">Username</label>
</span>

`}
                        </CodeHighlight>

                        <h3>KeyFilter</h3>
                        <p>InputText has built-in key filtering support to block certain keys, refer to <Link to="/keyfilter">keyfilte</Link> page for more information.</p>

                        <h3>Properties</h3>
                        <p>InputText passes any valid attribute to the underlying input element. Extended properties are as follows;</p>
                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>keyfilter</td>
                                        <td>string/regex</td>
                                        <td>null</td>
                                        <td>Format definition of the keys to block.</td>
                                    </tr>
                                    <tr>
                                        <td>validateOnly</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When enabled, instead of blocking keys, input is validated internally to test against the regular expression.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ui-inputtext</td>
                                        <td>Input element</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/inputtext" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputText} from 'primereact/inputtext';

export class InputTextDemo extends Component {
        
    constructor() {
        super();
        this.state = {
            value: null
        };
    }

    toggle() {
        this.setState({disabled: !this.state.disabled});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputText</h1>
                        <p>InputText is an extension to standard input element with theming and keyfiltering.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Basic</h3>
                    <InputText onChange={(e) => this.setState({value: e.target.value})}/>
                    <span style={{marginLeft:'.5em'}}>{this.state.value}</span>

                    <h3>Floating Label</h3>
                    <span className="ui-float-label">
                        <InputText id="float-input" type="text" size="30" />
                        <label htmlFor="float-input">Username</label>
                    </span>

                    <h3>KeyFilter</h3>
                    <InputText type="text" keyfilter="pint" />
                </div>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
