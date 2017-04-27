import React from 'react';
import {VictoryLine} from 'victory';

// var data = [{
//   "country": "Unites States",
//   date: "Jan 2000",
//   "price": 39.81
// },
// {
//   "country": "Unites States",
//   date: "Feb 2000",
//   "price": 36.35
// },
// {
//   "country": "Unites States",
//   date: "Mar 2000",
//   "price": 43.22
// },
// {
//   "country": "Unites States",
//   date: "Apr 2000",
//   "price": 28.37
// },
// {
//   "country": "Unites States",
//   date: "May 2000",
//   "price": 25.45
// },
// {
//   "country": "Unites States",
//   date: "Jun 2000",
//   "price": 32.54
// },
// {
//   "country": "Unites States",
//   date: "Jul 2000",
//   "price": 28.4
// },
// {
//   "country": "Unites States",
//   date: "Aug 2000",
//   "price": 28.4
// },
// {
//   "country": "Unites States",
//   date: "Sep 2000",
//   "price": 24.53
// },
// {
//   "country": "Unites States",
//   date: "Oct 2000",
//   "price": 28.02
// },
// {
//   "country": "Unites States",
//   date: "Nov 2000",
//   "price": 23.34
// },
// {
//   "country": "Unites States",
//   date: "Dec 2000",
//   "price": 17.65
// },
// {
//   "country": "Unites States",
//   date: "Jan 2001",
//   "price": 24.84
// },
// {
//   "country": "Unites States",
//   date: "Feb 2001",
//   "price": 24
// },
// {
//   "country": "Unites States",
//   date: "Mar 2001",
//   "price": 22.25
// },
// {
//   "country": "Unites States",
//   date: "Apr 2001",
//   "price": 27.56
// },
// {
//   "country": "Unites States",
//   date: "May 2001",
//   "price": 28.14
// },
// {
//   "country": "Unites States",
//   date: "Jun 2001",
//   "price": 29.7
// },
// {
//   "country": "Unites States",
//   date: "Jul 2001",
//   "price": 26.93
// },
// {
//   "country": "Unites States",
//   date: "Aug 2001",
//   "price": 23.21
// },
// {
//   "country": "Unites States",
//   date: "Sep 2001",
//   "price": 20.82
// },
// {
//   "country": "Unites States",
//   date: "Oct 2001",
//   "price": 23.65
// },
// {
//   "country": "Unites States",
//   date: "Nov 2001",
//   "price": 26.12
// },
// {
//   "country": "Unites States",
//   date: "Dec 2001",
//   "price": 26.95
// },
// {
//   "country": "Unites States",
//   date: "Jan 2002",
//   "price": 25.92
// },
// {
//   "country": "Unites States",
//   date: "Feb 2002",
//   "price": 23.73
// },
// {
//   "country": "Unites States",
//   date: "Mar 2002",
//   "price": 24.53
// },
// {
//   "country": "Unites States",
//   date: "Apr 2002",
//   "price": 21.26
// },
// {
//   "country": "Unites States",
//   date: "May 2002",
//   "price": 20.71
// },
// {
//   "country": "Unites States",
//   date: "Jun 2002",
//   "price": 22.25
// },
// {
//   "country": "Unites States",
//   date: "Jul 2002",
//   "price": 19.52
// },
// {
//   "country": "Unites States",
//   date: "Aug 2002",
//   "price": 19.97
// },
// {
//   "country": "Unites States",
//   date: "Sep 2002",
//   "price": 17.79
// },
// {
//   "country": "Unites States",
//   date: "Oct 2002",
//   "price": 21.75
// },
// {
//   "country": "Unites States",
//   date: "Nov 2002",
//   "price": 23.46
// },
// {
//   "country": "Unites States",
//   date: "Dec 2002",
//   "price": 21.03
// },
// {
//   "country": "Unites States",
//   date: "Jan 2003",
//   "price": 19.31
// },
// {
//   "country": "Unites States",
//   date: "Feb 2003",
//   "price": 19.34
// },
// {
//   "country": "Unites States",
//   date: "Mar 2003",
//   "price": 19.76
// },
// {
//   "country": "Unites States",
//   date: "Apr 2003",
//   "price": 20.87
// },
// {
//   "country": "Unites States",
//   date: "May 2003",
//   "price": 20.09
// },
// {
//   "country": "Unites States",
//   date: "Jun 2003",
//   "price": 20.93
// },
// {
//   "country": "Unites States",
//   date: "Jul 2003",
//   "price": 21.56
// },
// {
//   "country": "Unites States",
//   date: "Aug 2003",
//   "price": 21.65
// },
// {
//   "country": "Unites States",
//   date: "Sep 2003",
//   "price": 22.69
// },
// {
//   "country": "Unites States",
//   date: "Oct 2003",
//   "price": 21.45
// },
// {
//   "country": "Unites States",
//   date: "Nov 2003",
//   "price": 21.1
// },
// {
//   "country": "Unites States",
//   date: "Dec 2003",
//   "price": 22.46
// },
// {
//   "country": "Unites States",
//   date: "Jan 2004",
//   "price": 22.69
// },
// {
//   "country": "Unites States",
//   date: "Feb 2004",
//   "price": 21.77
// },
// {
//   "country": "Unites States",
//   date: "Mar 2004",
//   "price": 20.46
// },
// {
//   "country": "Unites States",
//   date: "Apr 2004",
//   "price": 21.45
// },
// {
//   "country": "Unites States",
//   date: "May 2004",
//   "price": 21.53
// },
// {
//   "country": "Unites States",
//   date: "Jun 2004",
//   "price": 23.44
// },
// {
//   "country": "Unites States",
//   date: "Jul 2004",
//   "price": 23.38
// },
// {
//   "country": "Unites States",
//   date: "Aug 2004",
//   "price": 22.47
// },
// {
//   "country": "Unites States",
//   date: "Sep 2004",
//   "price": 22.76
// },
// {
//   "country": "Unites States",
//   date: "Oct 2004",
//   "price": 23.02
// },
// {
//   "country": "Unites States",
//   date: "Nov 2004",
//   "price": 24.6
// },
// {
//   "country": "Unites States",
//   date: "Dec 2004",
//   "price": 24.52
// },
// {
//   "country": "Unites States",
//   date: "Jan 2005",
//   "price": 24.11
// },
// {
//   "country": "Unites States",
//   date: "Feb 2005",
//   "price": 23.15
// },
// {
//   "country": "Unites States",
//   date: "Mar 2005",
//   "price": 22.24
// },
// {
//   "country": "Unites States",
//   date: "Apr 2005",
//   "price": 23.28
// },
// {
//   "country": "Unites States",
//   date: "May 2005",
//   "price": 23.82
// },
// {
//   "country": "Unites States",
//   date: "Jun 2005",
//   "price": 22.93
// },
// {
//   "country": "Unites States",
//   date: "Jul 2005",
//   "price": 23.64
// },
// {
//   "country": "Unites States",
//   date: "Aug 2005",
//   "price": 25.35
// },
// {
//   "country": "Unites States",
//   date: "Sep 2005",
//   "price": 23.83
// },
// {
//   "country": "Unites States",
//   date: "Oct 2005",
//   "price": 23.8
// },
// {
//   "country": "Unites States",
//   date: "Nov 2005",
//   "price": 25.71
// },
// {
//   "country": "Unites States",
//   date: "Dec 2005",
//   "price": 24.29
// },
// {
//   "country": "Unites States",
//   date: "Jan 2006",
//   "price": 26.14
// },
// {
//   "country": "Unites States",
//   date: "Feb 2006",
//   "price": 25.04
// },
// {
//   "country": "Unites States",
//   date: "Mar 2006",
//   "price": 25.36
// },
// {
//   "country": "Unites States",
//   date: "Apr 2006",
//   "price": 22.5
// },
// {
//   "country": "Unites States",
//   date: "May 2006",
//   "price": 21.19
// },
// {
//   "country": "Unites States",
//   date: "Jun 2006",
//   "price": 21.8
// },
// {
//   "country": "Unites States",
//   date: "Jul 2006",
//   "price": 22.51
// },
// {
//   "country": "Unites States",
//   date: "Aug 2006",
//   "price": 24.13
// },
// {
//   "country": "Unites States",
//   date: "Sep 2006",
//   "price": 25.68
// },
// {
//   "country": "Unites States",
//   date: "Oct 2006",
//   "price": 26.96
// },
// {
//   "country": "Unites States",
//   date: "Nov 2006",
//   "price": 27.66
// },
// {
//   "country": "Unites States",
//   date: "Dec 2006",
//   "price": 28.13
// },
// {
//   "country": "Unites States",
//   date: "Jan 2007",
//   "price": 29.07
// },
// {
//   "country": "Unites States",
//   date: "Feb 2007",
//   "price": 26.63
// },
// {
//   "country": "Unites States",
//   date: "Mar 2007",
//   "price": 26.35
// },
// {
//   "country": "Unites States",
//   date: "Apr 2007",
//   "price": 28.3
// },
// {
//   "country": "Unites States",
//   date: "May 2007",
//   "price": 29.11
// },
// {
//   "country": "Unites States",
//   date: "Jun 2007",
//   "price": 27.95
// },
// {
//   "country": "Unites States",
//   date: "Jul 2007",
//   "price": 27.5
// },
// {
//   "country": "Unites States",
//   date: "Aug 2007",
//   "price": 27.34
// },
// {
//   "country": "Unites States",
//   date: "Sep 2007",
//   "price": 28.04
// },
// {
//   "country": "Unites States",
//   date: "Oct 2007",
//   "price": 35.03
// },
// {
//   "country": "Unites States",
//   date: "Nov 2007",
//   "price": 32.09
// },
// {
//   "country": "Unites States",
//   date: "Dec 2007",
//   "price": 34
// },
// {
//   "country": "Unites States",
//   date: "Jan 2008",
//   "price": 31.13
// },
// {
//   "country": "Unites States",
//   date: "Feb 2008",
//   "price": 26.07
// },
// {
//   "country": "Unites States",
//   date: "Mar 2008",
//   "price": 27.21
// },
// {
//   "country": "Unites States",
//   date: "Apr 2008",
//   "price": 27.34
// },
// {
//   "country": "Unites States",
//   date: "May 2008",
//   "price": 27.25
// },
// {
//   "country": "Unites States",
//   date: "Jun 2008",
//   "price": 26.47
// },
// {
//   "country": "Unites States",
//   date: "Jul 2008",
//   "price": 24.75
// },
// {
//   "country": "Unites States",
//   date: "Aug 2008",
//   "price": 26.36
// },
// {
//   "country": "Unites States",
//   date: "Sep 2008",
//   "price": 25.78
// },
// {
//   "country": "Unites States",
//   date: "Oct 2008",
//   "price": 21.57
// },
// {
//   "country": "Unites States",
//   date: "Nov 2008",
//   "price": 19.66
// },
// {
//   "country": "Unites States",
//   date: "Dec 2008",
//   "price": 18.91
// },
// {
//   "country": "Unites States",
//   date: "Jan 2009",
//   "price": 16.63
// },
// {
//   "country": "Unites States",
//   date: "Feb 2009",
//   "price": 15.81
// },
// {
//   "country": "Unites States",
//   date: "Mar 2009",
//   "price": 17.99
// },
// {
//   "country": "Unites States",
//   date: "Apr 2009",
//   "price": 19.84
// },
// {
//   "country": "Unites States",
//   date: "May 2009",
//   "price": 20.59
// },
// {
//   "country": "Unites States",
//   date: "Jun 2009",
//   "price": 23.42
// },
// {
//   "country": "Unites States",
//   date: "Jul 2009",
//   "price": 23.18
// },
// {
//   "country": "Unites States",
//   date: "Aug 2009",
//   "price": 24.43
// },
// {
//   "country": "Unites States",
//   date: "Sep 2009",
//   "price": 25.49
// },
// {
//   "country": "Unites States",
//   date: "Oct 2009",
//   "price": 27.48
// },
// {
//   "country": "Unites States",
//   date: "Nov 2009",
//   "price": 29.27
// },
// {
//   "country": "Unites States",
//   date: "Dec 2009",
//   "price": 30.34
// },
// {
//   "country": "Unites States",
//   date: "Jan 2010",
//   "price": 28.05
// },
// {
//   "country": "Unites States",
//   date: "Feb 2010",
//   "price": 28.67
// },
// {
//   "country": "Unites States",
//   date: "Mar 2010",
//   "price": 28.8
// },
// {
//   "country": "Canada",
//   date: "Jan 2000",
//   "price": 64.56
// },
// {
//   "country": "Canada",
//   date: "Feb 2000",
//   "price": 68.87
// },
// {
//   "country": "Canada",
//   date: "Mar 2000",
//   "price": 67
// },
// {
//   "country": "Canada",
//   date: "Apr 2000",
//   "price": 55.19
// },
// {
//   "country": "Canada",
//   date: "May 2000",
//   "price": 48.31
// },
// {
//   "country": "Canada",
//   date: "Jun 2000",
//   "price": 36.31
// },
// {
//   "country": "Canada",
//   date: "Jul 2000",
//   "price": 30.12
// },
// {
//   "country": "Canada",
//   date: "Aug 2000",
//   "price": 41.5
// },
// {
//   "country": "Canada",
//   date: "Sep 2000",
//   "price": 38.44
// },
// {
//   "country": "Canada",
//   date: "Oct 2000",
//   "price": 36.62
// },
// {
//   "country": "Canada",
//   date: "Nov 2000",
//   "price": 24.69
// },
// {
//   "country": "Canada",
//   date: "Dec 2000",
//   "price": 15.56
// },
// {
//   "country": "Canada",
//   date: "Jan 2001",
//   "price": 17.31
// },
// {
//   "country": "Canada",
//   date: "Feb 2001",
//   "price": 10.19
// },
// {
//   "country": "Canada",
//   date: "Mar 2001",
//   "price": 10.23
// },
// {
//   "country": "Canada",
//   date: "Apr 2001",
//   "price": 15.78
// },
// {
//   "country": "Canada",
//   date: "May 2001",
//   "price": 16.69
// },
// {
//   "country": "Canada",
//   date: "Jun 2001",
//   "price": 14.15
// },
// {
//   "country": "Canada",
//   date: "Jul 2001",
//   "price": 12.49
// },
// {
//   "country": "Canada",
//   date: "Aug 2001",
//   "price": 8.94
// },
// {
//   "country": "Canada",
//   date: "Sep 2001",
//   "price": 5.97
// },
// {
//   "country": "Canada",
//   date: "Oct 2001",
//   "price": 6.98
// },
// {
//   "country": "Canada",
//   date: "Nov 2001",
//   "price": 11.32
// },
// {
//   "country": "Canada",
//   date: "Dec 2001",
//   "price": 10.82
// },
// {
//   "country": "Canada",
//   date: "Jan 2002",
//   "price": 14.19
// },
// {
//   "country": "Canada",
//   date: "Feb 2002",
//   "price": 14.1
// },
// {
//   "country": "Canada",
//   date: "Mar 2002",
//   "price": 14.3
// },
// {
//   "country": "Canada",
//   date: "Apr 2002",
//   "price": 16.69
// },
// {
//   "country": "Canada",
//   date: "May 2002",
//   "price": 18.23
// },
// {
//   "country": "Canada",
//   date: "Jun 2002",
//   "price": 16.25
// },
// {
//   "country": "Canada",
//   date: "Jul 2002",
//   "price": 14.45
// },
// {
//   "country": "Canada",
//   date: "Aug 2002",
//   "price": 14.94
// },
// {
//   "country": "Canada",
//   date: "Sep 2002",
//   "price": 15.93
// },
// {
//   "country": "Canada",
//   date: "Oct 2002",
//   "price": 19.36
// },
// {
//   "country": "Canada",
//   date: "Nov 2002",
//   "price": 23.35
// },
// {
//   "country": "Canada",
//   date: "Dec 2002",
//   "price": 18.89
// },
// {
//   "country": "Canada",
//   date: "Jan 2003",
//   "price": 21.85
// },
// {
//   "country": "Canada",
//   date: "Feb 2003",
//   "price": 22.01
// },
// {
//   "country": "Canada",
//   date: "Mar 2003",
//   "price": 26.03
// },
// {
//   "country": "Canada",
//   date: "Apr 2003",
//   "price": 28.69
// },
// {
//   "country": "Canada",
//   date: "May 2003",
//   "price": 35.89
// },
// {
//   "country": "Canada",
//   date: "Jun 2003",
//   "price": 36.32
// },
// {
//   "country": "Canada",
//   date: "Jul 2003",
//   "price": 41.64
// },
// {
//   "country": "Canada",
//   date: "Aug 2003",
//   "price": 46.32
// },
// {
//   "country": "Canada",
//   date: "Sep 2003",
//   "price": 48.43
// },
// {
//   "country": "Canada",
//   date: "Oct 2003",
//   "price": 54.43
// },
// {
//   "country": "Canada",
//   date: "Nov 2003",
//   "price": 53.97
// },
// {
//   "country": "Canada",
//   date: "Dec 2003",
//   "price": 52.62
// },
// {
//   "country": "Canada",
//   date: "Jan 2004",
//   "price": 50.4
// },
// {
//   "country": "Canada",
//   date: "Feb 2004",
//   "price": 43.01
// },
// {
//   "country": "Canada",
//   date: "Mar 2004",
//   "price": 43.28
// },
// {
//   "country": "Canada",
//   date: "Apr 2004",
//   "price": 43.6
// },
// {
//   "country": "Canada",
//   date: "May 2004",
//   "price": 48.5
// },
// {
//   "country": "Canada",
//   date: "Jun 2004",
//   "price": 54.4
// },
// {
//   "country": "Canada",
//   date: "Jul 2004",
//   "price": 38.92
// },
// {
//   "country": "Canada",
//   date: "Aug 2004",
//   "price": 38.14
// },
// {
//   "country": "Canada",
//   date: "Sep 2004",
//   "price": 40.86
// },
// {
//   "country": "Canada",
//   date: "Oct 2004",
//   "price": 34.13
// },
// {
//   "country": "Canada",
//   date: "Nov 2004",
//   "price": 39.68
// },
// {
//   "country": "Canada",
//   date: "Dec 2004",
//   "price": 44.29
// },
// {
//   "country": "Canada",
//   date: "Jan 2005",
//   "price": 43.22
// },
// {
//   "country": "Canada",
//   date: "Feb 2005",
//   "price": 35.18
// },
// {
//   "country": "Canada",
//   date: "Mar 2005",
//   "price": 34.27
// },
// {
//   "country": "Canada",
//   date: "Apr 2005",
//   "price": 32.36
// },
// {
//   "country": "Canada",
//   date: "May 2005",
//   "price": 35.51
// },
// {
//   "country": "Canada",
//   date: "Jun 2005",
//   "price": 33.09
// },
// {
//   "country": "Canada",
//   date: "Jul 2005",
//   "price": 45.15
// },
// {
//   "country": "Canada",
//   date: "Aug 2005",
//   "price": 42.7
// },
// {
//   "country": "Canada",
//   date: "Sep 2005",
//   "price": 45.3
// },
// {
//   "country": "Canada",
//   date: "Oct 2005",
//   "price": 39.86
// },
// {
//   "country": "Canada",
//   date: "Nov 2005",
//   "price": 48.46
// },
// {
//   "country": "Canada",
//   date: "Dec 2005",
//   "price": 47.15
// },
// {
//   "country": "Canada",
//   date: "Jan 2006",
//   "price": 44.82
// },
// {
//   "country": "Canada",
//   date: "Feb 2006",
//   "price": 37.44
// },
// {
//   "country": "Canada",
//   date: "Mar 2006",
//   "price": 36.53
// },
// {
//   "country": "Canada",
//   date: "Apr 2006",
//   "price": 35.21
// },
// {
//   "country": "Canada",
//   date: "May 2006",
//   "price": 34.61
// },
// {
//   "country": "Canada",
//   date: "Jun 2006",
//   "price": 38.68
// },
// {
//   "country": "Canada",
//   date: "Jul 2006",
//   "price": 26.89
// },
// {
//   "country": "Canada",
//   date: "Aug 2006",
//   "price": 30.83
// },
// {
//   "country": "Canada",
//   date: "Sep 2006",
//   "price": 32.12
// },
// {
//   "country": "Canada",
//   date: "Oct 2006",
//   "price": 38.09
// },
// {
//   "country": "Canada",
//   date: "Nov 2006",
//   "price": 40.34
// },
// {
//   "country": "Canada",
//   date: "Dec 2006",
//   "price": 39.46
// },
// {
//   "country": "Canada",
//   date: "Jan 2007",
//   "price": 37.67
// },
// {
//   "country": "Canada",
//   date: "Feb 2007",
//   "price": 39.14
// },
// {
//   "country": "Canada",
//   date: "Mar 2007",
//   "price": 39.79
// },
// {
//   "country": "Canada",
//   date: "Apr 2007",
//   "price": 61.33
// },
// {
//   "country": "Canada",
//   date: "May 2007",
//   "price": 69.14
// },
// {
//   "country": "Canada",
//   date: "Jun 2007",
//   "price": 68.41
// },
// {
//   "country": "Canada",
//   date: "Jul 2007",
//   "price": 78.54
// },
// {
//   "country": "Canada",
//   date: "Aug 2007",
//   "price": 79.91
// },
// {
//   "country": "Canada",
//   date: "Sep 2007",
//   "price": 93.15
// },
// {
//   "country": "Canada",
//   date: "Oct 2007",
//   "price": 89.15
// },
// {
//   "country": "Canada",
//   date: "Nov 2007",
//   "price": 90.56
// },
// {
//   "country": "Canada",
//   date: "Dec 2007",
//   "price": 92.64
// },
// {
//   "country": "Canada",
//   date: "Jan 2008",
//   "price": 77.7
// },
// {
//   "country": "Canada",
//   date: "Feb 2008",
//   "price": 64.47
// },
// {
//   "country": "Canada",
//   date: "Mar 2008",
//   "price": 71.3
// },
// {
//   "country": "Canada",
//   date: "Apr 2008",
//   "price": 78.63
// },
// {
//   "country": "Canada",
//   date: "May 2008",
//   "price": 81.62
// },
// {
//   "country": "Canada",
//   date: "Jun 2008",
//   "price": 73.33
// },
// {
//   "country": "Canada",
//   date: "Jul 2008",
//   "price": 76.34
// },
// {
//   "country": "Canada",
//   date: "Aug 2008",
//   "price": 80.81
// },
// {
//   "country": "Canada",
//   date: "Sep 2008",
//   "price": 72.76
// },
// {
//   "country": "Canada",
//   date: "Oct 2008",
//   "price": 57.24
// },
// {
//   "country": "Canada",
//   date: "Nov 2008",
//   "price": 42.7
// },
// {
//   "country": "Canada",
//   date: "Dec 2008",
//   "price": 51.28
// },
// {
//   "country": "Canada",
//   date: "Jan 2009",
//   "price": 58.82
// },
// {
//   "country": "Canada",
//   date: "Feb 2009",
//   "price": 64.79
// },
// {
//   "country": "Canada",
//   date: "Mar 2009",
//   "price": 73.44
// },
// {
//   "country": "Canada",
//   date: "Apr 2009",
//   "price": 80.52
// },
// {
//   "country": "Canada",
//   date: "May 2009",
//   "price": 77.99
// },
// {
//   "country": "Canada",
//   date: "Jun 2009",
//   "price": 83.66
// },
// {
//   "country": "Canada",
//   date: "Jul 2009",
//   "price": 85.76
// },
// {
//   "country": "Canada",
//   date: "Aug 2009",
//   "price": 81.19
// },
// {
//   "country": "Canada",
//   date: "Sep 2009",
//   "price": 93.36
// },
// {
//   "country": "Canada",
//   date: "Oct 2009",
//   "price": 118.81
// },
// {
//   "country": "Canada",
//   date: "Nov 2009",
//   "price": 135.91
// },
// {
//   "country": "Canada",
//   date: "Dec 2009",
//   "price": 134.52
// },
// {
//   "country": "Canada",
//   date: "Jan 2010",
//   "price": 125.41
// },
// {
//   "country": "Canada",
//   date: "Feb 2010",
//   "price": 118.4
// },
// {
//   "country": "Canada",
//   date: "Mar 2010",
//   "price": 128.82
// },
// {
//   "country": "China",
//   date: "Jan 2000",
//   "price": 100.52
// },
// {
//   "country": "China",
//   date: "Feb 2000",
//   "price": 92.11
// },
// {
//   "country": "China",
//   date: "Mar 2000",
//   "price": 106.11
// },
// {
//   "country": "China",
//   date: "Apr 2000",
//   "price": 99.95
// },
// {
//   "country": "China",
//   date: "May 2000",
//   "price": 96.31
// },
// {
//   "country": "China",
//   date: "Jun 2000",
//   "price": 98.33
// },
// {
//   "country": "China",
//   date: "Jul 2000",
//   "price": 100.74
// },
// {
//   "country": "China",
//   date: "Aug 2000",
//   "price": 118.62
// },
// {
//   "country": "China",
//   date: "Sep 2000",
//   "price": 101.19
// },
// {
//   "country": "China",
//   date: "Oct 2000",
//   "price": 88.5
// },
// {
//   "country": "China",
//   date: "Nov 2000",
//   "price": 84.12
// },
// {
//   "country": "China",
//   date: "Dec 2000",
//   "price": 76.47
// },
// {
//   "country": "China",
//   date: "Jan 2001",
//   "price": 100.76
// },
// {
//   "country": "China",
//   date: "Feb 2001",
//   "price": 89.98
// },
// {
//   "country": "China",
//   date: "Mar 2001",
//   "price": 86.63
// },
// {
//   "country": "China",
//   date: "Apr 2001",
//   "price": 103.7
// },
// {
//   "country": "China",
//   date: "May 2001",
//   "price": 100.82
// },
// {
//   "country": "China",
//   date: "Jun 2001",
//   "price": 102.35
// },
// {
//   "country": "China",
//   date: "Jul 2001",
//   "price": 94.87
// },
// {
//   "country": "China",
//   date: "Aug 2001",
//   "price": 90.25
// },
// {
//   "country": "China",
//   date: "Sep 2001",
//   "price": 82.82
// },
// {
//   "country": "China",
//   date: "Oct 2001",
//   "price": 97.58
// },
// {
//   "country": "China",
//   date: "Nov 2001",
//   "price": 104.5
// },
// {
//   "country": "China",
//   date: "Dec 2001",
//   "price": 109.36
// },
// {
//   "country": "China",
//   date: "Jan 2002",
//   "price": 97.54
// },
// {
//   "country": "China",
//   date: "Feb 2002",
//   "price": 88.82
// },
// {
//   "country": "China",
//   date: "Mar 2002",
//   "price": 94.15
// },
// {
//   "country": "China",
//   date: "Apr 2002",
//   "price": 75.82
// },
// {
//   "country": "China",
//   date: "May 2002",
//   "price": 72.97
// },
// {
//   "country": "China",
//   date: "Jun 2002",
//   "price": 65.31
// },
// {
//   "country": "China",
//   date: "Jul 2002",
//   "price": 63.86
// },
// {
//   "country": "China",
//   date: "Aug 2002",
//   "price": 68.52
// },
// {
//   "country": "China",
//   date: "Sep 2002",
//   "price": 53.01
// },
// {
//   "country": "China",
//   date: "Oct 2002",
//   "price": 71.76
// },
// {
//   "country": "China",
//   date: "Nov 2002",
//   "price": 79.16
// },
// {
//   "country": "China",
//   date: "Dec 2002",
//   "price": 70.58
// },
// {
//   "country": "China",
//   date: "Jan 2003",
//   "price": 71.22
// },
// {
//   "country": "China",
//   date: "Feb 2003",
//   "price": 71.13
// },
// {
//   "country": "China",
//   date: "Mar 2003",
//   "price": 71.57
// },
// {
//   "country": "China",
//   date: "Apr 2003",
//   "price": 77.47
// },
// {
//   "country": "China",
//   date: "May 2003",
//   "price": 80.48
// },
// {
//   "country": "China",
//   date: "Jun 2003",
//   "price": 75.42
// },
// {
//   "country": "China",
//   date: "Jul 2003",
//   "price": 74.28
// },
// {
//   "country": "China",
//   date: "Aug 2003",
//   "price": 75.12
// },
// {
//   "country": "China",
//   date: "Sep 2003",
//   "price": 80.91
// },
// {
//   "country": "China",
//   date: "Oct 2003",
//   "price": 81.96
// },
// {
//   "country": "China",
//   date: "Nov 2003",
//   "price": 83.08
// },
// {
//   "country": "China",
//   date: "Dec 2003",
//   "price": 85.05
// },
// {
//   "country": "China",
//   date: "Jan 2004",
//   "price": 91.06
// },
// {
//   "country": "China",
//   date: "Feb 2004",
//   "price": 88.7
// },
// {
//   "country": "China",
//   date: "Mar 2004",
//   "price": 84.41
// },
// {
//   "country": "China",
//   date: "Apr 2004",
//   "price": 81.04
// },
// {
//   "country": "China",
//   date: "May 2004",
//   "price": 81.59
// },
// {
//   "country": "China",
//   date: "Jun 2004",
//   "price": 81.19
// },
// {
//   "country": "China",
//   date: "Jul 2004",
//   "price": 80.19
// },
// {
//   "country": "China",
//   date: "Aug 2004",
//   "price": 78.17
// },
// {
//   "country": "China",
//   date: "Sep 2004",
//   "price": 79.13
// },
// {
//   "country": "China",
//   date: "Oct 2004",
//   "price": 82.84
// },
// {
//   "country": "China",
//   date: "Nov 2004",
//   "price": 87.15
// },
// {
//   "country": "China",
//   date: "Dec 2004",
//   "price": 91.16
// },
// {
//   "country": "China",
//   date: "Jan 2005",
//   "price": 86.39
// },
// {
//   "country": "China",
//   date: "Feb 2005",
//   "price": 85.78
// },
// {
//   "country": "China",
//   date: "Mar 2005",
//   "price": 84.66
// },
// {
//   "country": "China",
//   date: "Apr 2005",
//   "price": 70.77
// },
// {
//   "country": "China",
//   date: "May 2005",
//   "price": 70.18
// },
// {
//   "country": "China",
//   date: "Jun 2005",
//   "price": 68.93
// },
// {
//   "country": "China",
//   date: "Jul 2005",
//   "price": 77.53
// },
// {
//   "country": "China",
//   date: "Aug 2005",
//   "price": 75.07
// },
// {
//   "country": "China",
//   date: "Sep 2005",
//   "price": 74.7
// },
// {
//   "country": "China",
//   date: "Oct 2005",
//   "price": 76.25
// },
// {
//   "country": "China",
//   date: "Nov 2005",
//   "price": 82.98
// },
// {
//   "country": "China",
//   date: "Dec 2005",
//   "price": 76.73
// },
// {
//   "country": "China",
//   date: "Jan 2006",
//   "price": 75.89
// },
// {
//   "country": "China",
//   date: "Feb 2006",
//   "price": 75.09
// },
// {
//   "country": "China",
//   date: "Mar 2006",
//   "price": 77.17
// },
// {
//   "country": "China",
//   date: "Apr 2006",
//   "price": 77.05
// },
// {
//   "country": "China",
//   date: "May 2006",
//   "price": 75.04
// },
// {
//   "country": "China",
//   date: "Jun 2006",
//   "price": 72.15
// },
// {
//   "country": "China",
//   date: "Jul 2006",
//   "price": 72.7
// },
// {
//   "country": "China",
//   date: "Aug 2006",
//   "price": 76.35
// },
// {
//   "country": "China",
//   date: "Sep 2006",
//   "price": 77.26
// },
// {
//   "country": "China",
//   date: "Oct 2006",
//   "price": 87.06
// },
// {
//   "country": "China",
//   date: "Nov 2006",
//   "price": 86.95
// },
// {
//   "country": "China",
//   date: "Dec 2006",
//   "price": 91.9
// },
// {
//   "country": "China",
//   date: "Jan 2007",
//   "price": 93.79
// },
// {
//   "country": "China",
//   date: "Feb 2007",
//   "price": 88.18
// },
// {
//   "country": "China",
//   date: "Mar 2007",
//   "price": 89.44
// },
// {
//   "country": "China",
//   date: "Apr 2007",
//   "price": 96.98
// },
// {
//   "country": "China",
//   date: "May 2007",
//   "price": 101.54
// },
// {
//   "country": "China",
//   date: "Jun 2007",
//   "price": 100.25
// },
// {
//   "country": "China",
//   date: "Jul 2007",
//   "price": 105.4
// },
// {
//   "country": "China",
//   date: "Aug 2007",
//   "price": 111.54
// },
// {
//   "country": "China",
//   date: "Sep 2007",
//   "price": 112.6
// },
// {
//   "country": "China",
//   date: "Oct 2007",
//   "price": 111
// },
// {
//   "country": "China",
//   date: "Nov 2007",
//   "price": 100.9
// },
// {
//   "country": "China",
//   date: "Dec 2007",
//   "price": 103.7
// },
// {
//   "country": "China",
//   date: "Jan 2008",
//   "price": 102.75
// },
// {
//   "country": "China",
//   date: "Feb 2008",
//   "price": 109.64
// },
// {
//   "country": "China",
//   date: "Mar 2008",
//   "price": 110.87
// },
// {
//   "country": "China",
//   date: "Apr 2008",
//   "price": 116.23
// },
// {
//   "country": "China",
//   date: "May 2008",
//   "price": 125.14
// },
// {
//   "country": "China",
//   date: "Jun 2008",
//   "price": 114.6
// },
// {
//   "country": "China",
//   date: "Jul 2008",
//   "price": 123.74
// },
// {
//   "country": "China",
//   date: "Aug 2008",
//   "price": 118.16
// },
// {
//   "country": "China",
//   date: "Sep 2008",
//   "price": 113.53
// },
// {
//   "country": "China",
//   date: "Oct 2008",
//   "price": 90.24
// },
// {
//   "country": "China",
//   date: "Nov 2008",
//   "price": 79.65
// },
// {
//   "country": "China",
//   date: "Dec 2008",
//   "price": 82.15
// },
// {
//   "country": "China",
//   date: "Jan 2009",
//   "price": 89.46
// },
// {
//   "country": "China",
//   date: "Feb 2009",
//   "price": 90.32
// },
// {
//   "country": "China",
//   date: "Mar 2009",
//   "price": 95.09
// },
// {
//   "country": "China",
//   date: "Apr 2009",
//   "price": 101.29
// },
// {
//   "country": "China",
//   date: "May 2009",
//   "price": 104.85
// },
// {
//   "country": "China",
//   date: "Jun 2009",
//   "price": 103.01
// },
// {
//   "country": "China",
//   date: "Jul 2009",
//   "price": 116.34
// },
// {
//   "country": "China",
//   date: "Aug 2009",
//   "price": 117
// },
// {
//   "country": "China",
//   date: "Sep 2009",
//   "price": 118.55
// },
// {
//   "country": "China",
//   date: "Oct 2009",
//   "price": 119.54
// },
// {
//   "country": "China",
//   date: "Nov 2009",
//   "price": 125.79
// },
// {
//   "country": "China",
//   date: "Dec 2009",
//   "price": 130.32
// },
// {
//   "country": "China",
//   date: "Jan 2010",
//   "price": 121.85
// },
// {
//   "country": "China",
//   date: "Feb 2010",
//   "price": 127.16
// },
// {
//   "country": "China",
//   date: "Mar 2010",
//   "price": 125.55
// },
// {
//   "country": "Korea",
//   date: "Jan 2000",
//   "price": 25.94
// },
// {
//   "country": "Korea",
//   date: "Feb 2000",
//   "price": 28.66
// },
// {
//   "country": "Korea",
//   date: "Mar 2000",
//   "price": 33.95
// },
// {
//   "country": "Korea",
//   date: "Apr 2000",
//   "price": 31.01
// },
// {
//   "country": "Korea",
//   date: "May 2000",
//   "price": 21
// },
// {
//   "country": "Korea",
//   date: "Jun 2000",
//   "price": 26.19
// },
// {
//   "country": "Korea",
//   date: "Jul 2000",
//   "price": 25.41
// },
// {
//   "country": "Korea",
//   date: "Aug 2000",
//   "price": 30.47
// },
// {
//   "country": "Korea",
//   date: "Sep 2000",
//   "price": 12.88
// },
// {
//   "country": "Korea",
//   date: "Oct 2000",
//   "price": 9.78
// },
// {
//   "country": "Korea",
//   date: "Nov 2000",
//   "price": 8.25
// },
// {
//   "country": "Korea",
//   date: "Dec 2000",
//   "price": 7.44
// },
// {
//   "country": "Korea",
//   date: "Jan 2001",
//   "price": 10.81
// },
// {
//   "country": "Korea",
//   date: "Feb 2001",
//   "price": 9.12
// },
// {
//   "country": "Korea",
//   date: "Mar 2001",
//   "price": 11.03
// },
// {
//   "country": "Korea",
//   date: "Apr 2001",
//   "price": 12.74
// },
// {
//   "country": "Korea",
//   date: "May 2001",
//   "price": 9.98
// },
// {
//   "country": "Korea",
//   date: "Jun 2001",
//   "price": 11.62
// },
// {
//   "country": "Korea",
//   date: "Jul 2001",
//   "price": 9.4
// },
// {
//   "country": "Korea",
//   date: "Aug 2001",
//   "price": 9.27
// },
// {
//   "country": "Korea",
//   date: "Sep 2001",
//   "price": 7.76
// },
// {
//   "country": "Korea",
//   date: "Oct 2001",
//   "price": 8.78
// },
// {
//   "country": "Korea",
//   date: "Nov 2001",
//   "price": 10.65
// },
// {
//   "country": "Korea",
//   date: "Dec 2001",
//   "price": 10.95
// },
// {
//   "country": "Korea",
//   date: "Jan 2002",
//   "price": 12.36
// },
// {
//   "country": "Korea",
//   date: "Feb 2002",
//   "price": 10.85
// },
// {
//   "country": "Korea",
//   date: "Mar 2002",
//   "price": 11.84
// },
// {
//   "country": "Korea",
//   date: "Apr 2002",
//   "price": 12.14
// },
// {
//   "country": "Korea",
//   date: "May 2002",
//   "price": 11.65
// },
// {
//   "country": "Korea",
//   date: "Jun 2002",
//   "price": 8.86
// },
// {
//   "country": "Korea",
//   date: "Jul 2002",
//   "price": 7.63
// },
// {
//   "country": "Korea",
//   date: "Aug 2002",
//   "price": 7.38
// },
// {
//   "country": "Korea",
//   date: "Sep 2002",
//   "price": 7.25
// },
// {
//   "country": "Korea",
//   date: "Oct 2002",
//   "price": 8.03
// },
// {
//   "country": "Korea",
//   date: "Nov 2002",
//   "price": 7.75
// },
// {
//   "country": "Korea",
//   date: "Dec 2002",
//   "price": 7.16
// },
// {
//   "country": "Korea",
//   date: "Jan 2003",
//   "price": 7.18
// },
// {
//   "country": "Korea",
//   date: "Feb 2003",
//   "price": 7.51
// },
// {
//   "country": "Korea",
//   date: "Mar 2003",
//   "price": 7.07
// },
// {
//   "country": "Korea",
//   date: "Apr 2003",
//   "price": 7.11
// },
// {
//   "country": "Korea",
//   date: "May 2003",
//   "price": 8.98
// },
// {
//   "country": "Korea",
//   date: "Jun 2003",
//   "price": 9.53
// },
// {
//   "country": "Korea",
//   date: "Jul 2003",
//   "price": 10.54
// },
// {
//   "country": "Korea",
//   date: "Aug 2003",
//   "price": 11.31
// },
// {
//   "country": "Korea",
//   date: "Sep 2003",
//   "price": 10.36
// },
// {
//   "country": "Korea",
//   date: "Oct 2003",
//   "price": 11.44
// },
// {
//   "country": "Korea",
//   date: "Nov 2003",
//   "price": 10.45
// },
// {
//   "country": "Korea",
//   date: "Dec 2003",
//   "price": 10.69
// },
// {
//   "country": "Korea",
//   date: "Jan 2004",
//   "price": 11.28
// },
// {
//   "country": "Korea",
//   date: "Feb 2004",
//   "price": 11.96
// },
// {
//   "country": "Korea",
//   date: "Mar 2004",
//   "price": 13.52
// },
// {
//   "country": "Korea",
//   date: "Apr 2004",
//   "price": 12.89
// },
// {
//   "country": "Korea",
//   date: "May 2004",
//   "price": 14.03
// },
// {
//   "country": "Korea",
//   date: "Jun 2004",
//   "price": 16.27
// },
// {
//   "country": "Korea",
//   date: "Jul 2004",
//   "price": 16.17
// },
// {
//   "country": "Korea",
//   date: "Aug 2004",
//   "price": 17.25
// },
// {
//   "country": "Korea",
//   date: "Sep 2004",
//   "price": 19.38
// },
// {
//   "country": "Korea",
//   date: "Oct 2004",
//   "price": 26.2
// },
// {
//   "country": "Korea",
//   date: "Nov 2004",
//   "price": 33.53
// },
// {
//   "country": "Korea",
//   date: "Dec 2004",
//   "price": 32.2
// },
// {
//   "country": "Korea",
//   date: "Jan 2005",
//   "price": 38.45
// },
// {
//   "country": "Korea",
//   date: "Feb 2005",
//   "price": 44.86
// },
// {
//   "country": "Korea",
//   date: "Mar 2005",
//   "price": 41.67
// },
// {
//   "country": "Korea",
//   date: "Apr 2005",
//   "price": 36.06
// },
// {
//   "country": "Korea",
//   date: "May 2005",
//   "price": 39.76
// },
// {
//   "country": "Korea",
//   date: "Jun 2005",
//   "price": 36.81
// },
// {
//   "country": "Korea",
//   date: "Jul 2005",
//   "price": 42.65
// },
// {
//   "country": "Korea",
//   date: "Aug 2005",
//   "price": 46.89
// },
// {
//   "country": "Korea",
//   date: "Sep 2005",
//   "price": 53.61
// },
// {
//   "country": "Korea",
//   date: "Oct 2005",
//   "price": 57.59
// },
// {
//   "country": "Korea",
//   date: "Nov 2005",
//   "price": 67.82
// },
// {
//   "country": "Korea",
//   date: "Dec 2005",
//   "price": 71.89
// },
// {
//   "country": "Korea",
//   date: "Jan 2006",
//   "price": 75.51
// },
// {
//   "country": "Korea",
//   date: "Feb 2006",
//   "price": 68.49
// },
// {
//   "country": "Korea",
//   date: "Mar 2006",
//   "price": 62.72
// },
// {
//   "country": "Korea",
//   date: "Apr 2006",
//   "price": 70.39
// },
// {
//   "country": "Korea",
//   date: "May 2006",
//   "price": 59.77
// },
// {
//   "country": "Korea",
//   date: "Jun 2006",
//   "price": 57.27
// },
// {
//   "country": "Korea",
//   date: "Jul 2006",
//   "price": 67.96
// },
// {
//   "country": "Korea",
//   date: "Aug 2006",
//   "price": 67.85
// },
// {
//   "country": "Korea",
//   date: "Sep 2006",
//   "price": 76.98
// },
// {
//   "country": "Korea",
//   date: "Oct 2006",
//   "price": 81.08
// },
// {
//   "country": "Korea",
//   date: "Nov 2006",
//   "price": 91.66
// },
// {
//   "country": "Korea",
//   date: "Dec 2006",
//   "price": 84.84
// },
// {
//   "country": "Korea",
//   date: "Jan 2007",
//   "price": 85.73
// },
// {
//   "country": "Korea",
//   date: "Feb 2007",
//   "price": 84.61
// },
// {
//   "country": "Korea",
//   date: "Mar 2007",
//   "price": 92.91
// },
// {
//   "country": "Korea",
//   date: "Apr 2007",
//   "price": 99.8
// },
// {
//   "country": "Korea",
//   date: "May 2007",
//   "price": 121.19
// },
// {
//   "country": "Korea",
//   date: "Jun 2007",
//   "price": 122.04
// },
// {
//   "country": "Korea",
//   date: "Jul 2007",
//   "price": 131.76
// },
// {
//   "country": "Korea",
//   date: "Aug 2007",
//   "price": 138.48
// },
// {
//   "country": "Korea",
//   date: "Sep 2007",
//   "price": 153.47
// },
// {
//   "country": "Korea",
//   date: "Oct 2007",
//   "price": 189.95
// },
// {
//   "country": "Korea",
//   date: "Nov 2007",
//   "price": 182.22
// },
// {
//   "country": "Korea",
//   date: "Dec 2007",
//   "price": 198.08
// },
// {
//   "country": "Korea",
//   date: "Jan 2008",
//   "price": 135.36
// },
// {
//   "country": "Korea",
//   date: "Feb 2008",
//   "price": 125.02
// },
// {
//   "country": "Korea",
//   date: "Mar 2008",
//   "price": 143.5
// },
// {
//   "country": "Korea",
//   date: "Apr 2008",
//   "price": 173.95
// },
// {
//   "country": "Korea",
//   date: "May 2008",
//   "price": 188.75
// },
// {
//   "country": "Korea",
//   date: "Jun 2008",
//   "price": 167.44
// },
// {
//   "country": "Korea",
//   date: "Jul 2008",
//   "price": 158.95
// },
// {
//   "country": "Korea",
//   date: "Aug 2008",
//   "price": 169.53
// },
// {
//   "country": "Korea",
//   date: "Sep 2008",
//   "price": 113.66
// },
// {
//   "country": "Korea",
//   date: "Oct 2008",
//   "price": 107.59
// },
// {
//   "country": "Korea",
//   date: "Nov 2008",
//   "price": 92.67
// },
// {
//   "country": "Korea",
//   date: "Dec 2008",
//   "price": 85.35
// },
// {
//   "country": "Korea",
//   date: "Jan 2009",
//   "price": 90.13
// },
// {
//   "country": "Korea",
//   date: "Feb 2009",
//   "price": 89.31
// },
// {
//   "country": "Korea",
//   date: "Mar 2009",
//   "price": 105.12
// },
// {
//   "country": "Korea",
//   date: "Apr 2009",
//   "price": 125.83
// },
// {
//   "country": "Korea",
//   date: "May 2009",
//   "price": 135.81
// },
// {
//   "country": "Korea",
//   date: "Jun 2009",
//   "price": 142.43
// },
// {
//   "country": "Korea",
//   date: "Jul 2009",
//   "price": 163.39
// },
// {
//   "country": "Korea",
//   date: "Aug 2009",
//   "price": 168.21
// },
// {
//   "country": "Korea",
//   date: "Sep 2009",
//   "price": 185.35
// },
// {
//   "country": "Korea",
//   date: "Oct 2009",
//   "price": 188.5
// },
// {
//   "country": "Korea",
//   date: "Nov 2009",
//   "price": 199.91
// },
// {
//   "country": "Korea",
//   date: "Dec 2009",
//   "price": 210.73
// },
// {
//   "country": "Korea",
//   date: "Jan 2010",
//   "price": 192.06
// },
// {
//   "country": "Korea",
//   date: "Feb 2010",
//   "price": 204.62
// },
// {
//   "country": "Korea",
//   date: "Mar 2010",
//   "price": 223.02
// }
// ];

var smallData = [{
  month: "September",
  profit: 35000
},
{
  month: "October",
  profit: 42000
},
{
  month: "November",
  profit: 55000
}
]

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: smallData,
    }
  }
  render() {
    return (<VictoryLine data={
      smallData
      }
      x='month'
    y = {
      (datum) => datum.profit
    } />
    )
  }
}

export default Bar;