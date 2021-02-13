// @components
import {
  BioPage,
  ContactPage,
  GitHubPage,
  HomePage,
  NotFoundPage,
  NpmPage,
  SettingsPage,
  StackOverflowPage,
} from '../pages';

const components = {
  BioPage,
  ContactPage,
  GitHubPage,
  HomePage,
  NotFoundPage,
  NpmPage,
  SettingsPage,
  StackOverflowPage,
};

export const mapComponent = (componentName) =>
  components[componentName];
