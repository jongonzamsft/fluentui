import * as React from 'react';
import { ExampleCard, ComponentPage, PropertiesTableSet } from '@fluentui/react-docsite-components';
import { WeeklyDayPickerInlineExample } from './WeeklyDayPicker.Inline.Example';
import { WeeklyDayPickerInlineExpandableExample } from './WeeklyDayPicker.Inline.Expandable.Example';

const WeeklyDayPickerInlineExampleCode = require('!raw-loader!@fluentui/react-examples/src/date-time/WeeklyDayPicker/WeeklyDayPicker.Inline.Example.tsx') as string;
const WeeklyDayPickerInlineExpandableExampleCode = require('!raw-loader!@fluentui/react-examples/src/date-time/WeeklyDayPicker/WeeklyDayPicker.Inline.Expandable.Example.tsx') as string;

export class WeeklyDayPickerPage extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="WeeklyDayPicker"
        componentName="WeeklyDayPicker"
        exampleCards={
          <div>
            <ExampleCard title="Inline WeeklyDayPicker" code={WeeklyDayPickerInlineExampleCode}>
              <WeeklyDayPickerInlineExample />
            </ExampleCard>
            <ExampleCard
              title="Inline WeeklyDayPicker that can be expanded to full month picker"
              code={WeeklyDayPickerInlineExpandableExampleCode}
            >
              <WeeklyDayPickerInlineExpandableExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<
                string
              >('!raw-loader!@uifabric/date-time/src/components/WeeklyDayPicker/WeeklyDayPicker.types.ts'),
            ]}
          />
        }
      />
    );
  }
}
