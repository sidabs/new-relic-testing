/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name : ['NR Test'],
  /**
   * Your New Relic license key.
   */
  license_key : 'nothankyou',
  logging : {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'trace'
  },
  high_security : false,
  error_collector_enabled : true,
  capture_params : true,
  error_collector : {
    enabled : true
  },
  transaction_tracer : {
    enabled : true,
    transaction_threshold : 0.0000001
  },
  transaction_events : {
    enabled : true
  }
};
