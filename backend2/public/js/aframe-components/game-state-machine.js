/* global AFRAME, XSTATE */

XSTATE.createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswGUAuLtgFkUBjACwEsA7MAOgCMAncsAMyqgGIIB7am2XPhqoMOPIRIU+jZm0pQA2gAYAuolAAHbrHLZyvdSAAeiAKwAWABw0AzOYDsANnOP7NpQCYAnKZsAaEABPRBsvGxoARi8PJy8IiMdfJwBfZICRLEEJMipaGVZ2eiYC+QAFABsUQI4NFABXWDBlNSQQLR09A1aTBA8YmksIm0sle1M4m1DnAOCEFwiaDwjLUyUE+xWbeyVTVPT0TPEiHOliuSgi2XYKqo4wSghmw3bdfUpDHr77AaGRsYmpuYZiFHAtTK4HEtHJZhl49iAMmJ8McpHkzoV8udSvVGhAOAw4HUME9Wi9Ou9uogvj9hqNxkNAcC5vFbNEvJZHNE7I4bPDEVkUbkaAxuNw0BEuLxaAJxMIDkjsqjhaLxSTNNpXl1QD0IqYPOYaK5TIMVjDLH1LEzQuEojFOfFEltHHz5QLJEKRWKFrBuOUAG7sSV8GVCflHd18T3i-i+gPyNVtDXkj6ICL6jw0exWMb0nxLJnmNMDCweY26yyWBzOF2iN0nWhR72xwoaOoALzb5TACzqlB9-sgNXbne7MYHj1UzyTbxTCEs9gzpl85islnZjlB-iCiHMq0NTgcpgiLiU5mGNcOyIjDZVTf9LeHXYzvf7fsHrY7T7Hb4nLXVHRnSk5wXGglzsVd103JlQSUGh2X1ex1iGJRnTSBFXXDetlS9b8H0-MBwhfWN30fAjv0gBMyUA7VEHnRdlwgjkoO3XovFgrYdjXdxxnNC8FUFSMVQ8INpSyOVa0wpUow8Sjpy1YxEDiLxbHBbZjQPcFLRYtM3EzcFjRcM9oWPPi6ykoTcPkET+DEsMryw6TLMUSdSTkikaIQHlvnMbxoXnCtCx8pk0zCGhCxGPVIuNcFTMkj0LNfPCRx7PtiLxD9kvI38pwA+TPlcRY7DsGJPGWHxHGCyYFn1JQbFMLMlHZSLYvs8yxQzRL5BoDKvyI8ch3wjq0tk3L3IU3oCo8IqfO2JY13BYLzDiUCXCq49OU2FrFXi9qnO60jCNS-qerI18KJc-9NTG-Lvims8ZtK+aKu0iJtjgoqYVcGIoksLaBJvMUbGskNaDs7bBMBkartnMrTENFZPEazlEgcYKYnCMZEkrZwbGM8w-uvbC0HCTrOB4YNbIw1qduJpyoeTICEiGPSNlcXUPBhCw0dC8KdlLUtotQ-YJOpiHadJ-b8JSs70tIu8f3p6jxrTM9QMcUslBGFdzQ8Z7ZgZarzE8TkjxiQY4TQsH-qJknmy6k7nyOn8BpHIbx0VvLU31cJwQ1rWrD6PXUyWsFVpseIXCa3lLap8GAfFu2LhOw6ZZdrtbfdi7E1GmHvbVv3TwD3Xgte2Cwh8o9zUQkyY5FuOaAgMBMUKRvm7KSpqlqBomizqjPYmhYEjWIYuS8Vb7CZDw1gNLwvGhMYlDWJY+gJrDW-RLr16udvbnubLXJzoDdcHxxh9CKax684K4jhuwDIsOIUJ81elS3koLjfrEcUHAlYCJHu-zZ2hkfUEkRT7xHPqEce19EiREQrjTw8xhgeFSGhSg3BG7wFaFba8OVgEeQALS7iZAQ8YcFZ4UMoRQ36tdLz1zblAPBDMPL6knrpBI9Usz2B8LuJcL8hQMMuO-G4sxLrMPGguAse4jxG3gd4Dmax+GnG3hcBh2Ju4QCYUrHo4FbBnjcOMDmDhPATxYrwgYp4OSz0SOMHY9glFohUUI84ABRB4Wj+66KKgY6IlZZqmNmAgsKFZEI7EMTyGhws6HW0bB466iBT7WHDmxXUp5Qi+C8Gw2wU1EZGwsMkrw9jaH8UJo2LKcSYZ1UcJmKeKsprh24VpWYhZYIxCsCuVYhSxgoOKWZGm8t2AVKAokapyS1irDPD4UIJcDTOHGOCBI0Qja6wcUTAZ9s5ZDI8tsA0YzUmTIyVadWiwswclUmsQYCRVllIlidaWaUtkSL1LYKI4y0lTMyWYvclYVw8iWsMBwRSoklIcrePadzykH3wcrU8CweFWAiGsOxWYCxLVAl0oYvh7QcmuWC25pEPCPJ6Dsl5KSJnpOmSxPUi4-iFM1okTwuKcL4sGjQPqP4iWIG6aSt5BzKWzFBIPclC53Dslqky6MLLXaQrEdo1MhdDTq26b4LYU8twCsanBWq882k7CGBK9ZScDqcoQCSvZ5KPmTzWHBPySlJiWL1Aa8FB02VO0gCa7l5r3mHJYt4WCvgVhOGNihKaTqpXpxlUA8ROoFXcO8DshICD1VUjXIsOIVdkYrGhBKwlULo0hCZGxb4FY8b2AXIsyJ6E64xISg8vNcrTVHjCki+IkVBjDG5rBM0oJElmnPL0uKYs3ZxkYfW-uR5C0+EWI1BevhxgbAiDm51UsTWzzRj5AYwwNyL1xkpJd4bRzsvdWO+JCBjwBNTFVZtMILmNTTIugdot47DqSl2eWx7ZX9yMoaOqWwEUtPqpVdwYDdQ+BGKMNp+7E6S1dquz5+sjY2l+ZMMteTXpQfvBs1lR7NEnphqjbSIdMzHhiEuFwpYtgYZHTBr8MsTWTL0VsP9a4nCJAvWepasEXCYymazKjr6CJweCprRcNhdYcm8IUjk0dgV9KHcukcKc62ftPeekuiFIieA4ufStODQW7QPRnDleGgIMYcOkpINVpgvU5MWX2U8eTjBXBKmwq7uHZL+IWFJupk0ICLQMDkZaRO4zsECqt0TSkqiMx+qNDbXr9AXFyCwG4lpAm0n6zdHIh4VmGP22Tg745GcGSZjyiL+hic8681tvnZ5wynnSrGWYzwuYU2+k1iKxgedGF54evh10ZjNHqc2QwRstYPfc8c7W0zhAq91qrPmgMLCNuaEeaYdjisffXKMRWsOZToyV5WhYMxzzqkbXUrgt1AdgkzVaPhTa6jG9Bh27W6RdazPNvrhHaqRA6Wuc0S4OGPcw0a7DbrcMqZhtNt7PXquLWWohGaZH1ZJCB9Rh2ka+6qcLHDNmbEOZidCHPOHXGjQCy4vqC2+Wn021a4Jg7MbOuzfe95z7+sROgTE2R3cvN8abZrYDWnSnJv09TFDpnMOFsvQ02VqI6tdbIN51TrbUXBcY7cvh3UFip6DGcHPLMQcz2LLs5xpYjT5yrM-sViHQF+WpnNAaXcKEZHzqiGFvTr8m4bw-p7lRIiTXzitaeNN+oQoQMMhbn378G6R6-hok1WxvickXj5Y+ox2NT01caMTqSsyhAfUr62lvN4x-YG48HsXPFlsNGxU8gcOvsaiMeRYrhNbDHNqEVByQgA */
    id: 'gameStateMachine',
    initial: 'briefing',
    states: {
        briefing: {
            id: 'briefing',
            initial: 'briefingPlay',
            states: {
                briefingPlay: {
                    on: {
                        "pause": "briefingPaused",
                        "end": "briefingEnd"
                    }
                },
                briefingPaused: {
                    on: {
                        "resume": "briefingPlay",
                    }
                },
                briefingEnd: {
                    type: "final"
                }
            },
            onDone: {
                target: "room1",
            }
        }, 
        room1: {
            id: 'room1',
            initial: "solving",
            onDone: 'room2',
            states: {
                "solved": {
                    type: "final"
                },
                "solving": {
                    type: 'parallel',
                    onDone: "solved",
                    states: {
                        puzzle1: {
                            initial: 'unsolved',
                            states: {
                                "unsolved": {
                                    on: {
                                        "puzzle1.solved": "solved"
                                    }
                                },
                                "solved": {
                                    type: "final"
                                }
                            }
                        },
                        puzzle2: {
                            initial: 'unsolved',
                            states: {
                                "unsolved": {
                                    on: {
                                        "puzzle2.solved": "solved"
                                    }
                                },
                                "solved": {
                                    type: "final"
                                }
                            }
                        },
                        puzzle3: {
                            initial: 'unsolved',
                            states: {
                                "unsolved": {
                                    on: {
                                        "puzzle3.solved": "solved"
                                    }
                                },
                                "solved": {
                                    type: "final"
                                }
                            }                
                        },
                    },
                },
            }
        },
        room2: {
            id: 'room2',
            initial: "solving",
            onDone: 'room3',
            states: {
                "solved": {
                    type: "final"
                },
                "solving": {
                    type: 'parallel',
                    onDone: "solved",
                    states: {
                        puzzle1: {
                            initial: 'unsolved',
                            states: {
                                "unsolved": {
                                    on: {
                                        "puzzle1.solved": "solved"
                                    }
                                },
                                "solved": {
                                    type: "final"
                                }
                            }
                        },
                        puzzle2: {
                            initial: 'unsolved',
                            states: {
                                "unsolved": {
                                    on: {
                                        "puzzle2.solved": "solved"
                                    }
                                },
                                "solved": {
                                    type: "final"
                                }
                            }
                        },
                        puzzle3: {
                            initial: 'unsolved',
                            states: {
                                "unsolved": {
                                    on: {
                                        "puzzle3.solved": "solved"
                                    }
                                },
                                "solved": {
                                    type: "final"
                                }
                            }                
                        },
                    },
                },
            }
        },
        room3: {
            id: 'room3',
            initial: "solving",
            onDone: 'debriefing',
            states: {
                "solved": {
                    type: "final"
                },
                "solving": {
                    type: 'parallel',
                    onDone: "solved",
                    states: {
                        puzzle1: {
                            initial: 'unsolved',
                            states: {
                                "unsolved": {
                                    on: {
                                        "puzzle1.solved": "solved"
                                    }
                                },
                                "solved": {
                                    type: "final"
                                }
                            }
                        },
                        puzzle2: {
                            initial: 'unsolved',
                            states: {
                                "unsolved": {
                                    on: {
                                        "puzzle2.solved": "solved"
                                    }
                                },
                                "solved": {
                                    type: "final"
                                }
                            }
                        },
                        puzzle3: {
                            initial: 'unsolved',
                            states: {
                                "unsolved": {
                                    on: {
                                        "puzzle3.solved": "solved"
                                    }
                                },
                                "solved": {
                                    type: "final"
                                }
                            }                
                        },
                    },
                },
            }
        },
        debriefing: {
            id: 'debriefing',
            type: 'final',
            initial: 'debriefingPlay',
            states: {
                debriefingPlay: {
                    on: {
                        "pause": "debriefingPaused",
                        "end": "debriefingEnd"
                    }
                },
                debriefingPaused: {
                    on: {
                        "resume": "debriefingPlay",
                    }
                },
                debriefingEnd: {
                    type: "final"
                }
            },
        }, 
    }
});

// AFRAME.registerSystem();