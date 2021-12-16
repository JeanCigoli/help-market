import React from 'react';

export interface InputParams {
  name: string;
  type: string;
  error: any;
  label: string;
  icon?: React.FC;
  [propName: string]: any;
}
