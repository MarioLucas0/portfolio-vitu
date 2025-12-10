import React from 'react';

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
}

export interface NavItem {
  label: string;
  id: string;
  icon: React.ReactNode;
}
