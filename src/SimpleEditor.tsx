import React, { PureComponent } from 'react';
import { Field, Switch } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';
import { SimpleOptions } from './types';
import MyField from './components/MyField';
import { FieldCMEditor } from 'components/FieldCMEditor';

export class SimpleEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  onChange(key: string, value: any) {
    this.props.onOptionsChange({ ...this.props.options, [key]: value });
  }

  render() {
    const FieldEl = Field || MyField;
    return (
      <>
        <FieldEl
          label="Echarts Option"
        >
          <FieldCMEditor value={this.props.options.getOption} onChange={v => this.onChange('getOption', v)} />
        </FieldEl>
      </>
    );
  }
}
