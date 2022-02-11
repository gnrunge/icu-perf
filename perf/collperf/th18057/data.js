window.BENCHMARK_DATA = {
  "lastUpdate": 1644620369530,
  "repoUrl": "https://github.com/gnrunge/icu",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a48ddc0c9e673a66144d9f2122b8093b3c05bdf",
          "message": "Merge pull request #7 from gnrunge/cb3\n\nSort out output data subdirectories.",
          "timestamp": "2022-02-11T14:41:47-08:00",
          "tree_id": "dfc8b0eee085e9adc7a54ef5242d362811b0f06f",
          "url": "https://github.com/gnrunge/icu/commit/7a48ddc0c9e673a66144d9f2122b8093b3c05bdf"
        },
        "date": 1644620368073,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestIcu_KeyGen_null",
            "value": 254.5551,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_strcoll_null",
            "value": 30383983.7633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_qsort_usekey",
            "value": 4211591.4411,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_strcoll_null",
            "value": 29492597.4023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestIcu_BinarySearch_usekey",
            "value": 4462077.0674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}