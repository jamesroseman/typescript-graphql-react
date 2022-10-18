import React, { useState } from 'react';
import { Query } from 'react-apollo';

import styles from './HomeRoute.module.css';
import { FindMaxQuery, FindMaxQueryResponse } from '../queries/FindMaxQuery';
import NumberSelector from '../components/NumberSelectorComponent';

export type HomeRouteProps = {

}

export default function HomeRoute() {
  const [numbers, setNumbers] = useState<number[]>([]);

  return (
    <div className={styles['container']}>
      <div className={styles['number-selector']}>
        <NumberSelector onNumbersChange={setNumbers} />
      </div>
      <div className={styles['find-max']}>
        {renderQuery(numbers)}
      </div>
    </div>
  )
}

function renderQuery(numbers: number[]): JSX.Element {
  if (numbers.length > 0) {
    return (
      <Query query={FindMaxQuery} variables={{ numbers }}>
        {renderFromResponse}
      </Query>
    );
  } else {
    return <p>Maximum:</p>;
  }
}

function renderFromResponse(response: FindMaxQueryResponse): JSX.Element {
  const { error, data, loading } = response;
  if (error !== undefined) {
    return <p>There was an error.</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (data !== undefined && data.findMax !== undefined) {
    return <p>Maximum: {data.findMax.max}</p>;
  }
  return <p>Please try again.</p>;
}