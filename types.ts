import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface InsightPost {
  id: number;
  title: string;
  date: string;
  description: string;
}

export interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}