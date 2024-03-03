export const queries = [
  {
    id: "listWindows",
    query: `PREFIX ifc: <http://ifcowl.openbimstandards.org/IFC2X3_Final#>
    SELECT ?s WHERE {?s a ifc:IFCPLATE}`,
    postProcessing: (res) => {
      return res.results.bindings.map(b => iriToGlobalId(b.s.value));
    },
    highlightColor: "red",
    highlightResults: true
  },
  {
    id: "listProperties",
    query: `PREFIX bot: <https://w3id.org/bot#>
    PREFIX schema: <http://schema.org/>
    PREFIX rec: <http://purl.org/ontology/rec/core#>

    SELECT ?s ?lat ?lng
    WHERE {
      ?s a bot:Building ;
         schema:geo [
           schema:latitude ?lat ;
           schema:longitude ?lng
         ]
    }`,
    postProcessing: (res) => {
      return res.results.bindings.map(b => {
        return {iri: iriToGlobalId(b.s.value), lat: parseFloat(b.lat.value), lng: parseFloat(b.lng.value)};
      });
    },
  }, {

    id: "propertyEnergySavingsProposals",
    query: `PREFIX schema: <http://schema.org/>
    PREFIX se: <https://sparenergi.dk/schema#>

    SELECT ?proposal ?label ?investment ?calculatedAnnualSavings ?simpleRepaymentPeriod
    WHERE {
    BIND(<http://example.com/buildings/{{propertyId}}> AS ?building)
    ?building se:hasEnergySavingsProposal ?proposal .
    ?proposal schema:name ?label ;
    se:investment ?investment ;
    se:calculatedAnnualSavings ?calculatedAnnualSavings ;
    se:simpleRepaymentPeriod ?simpleRepaymentPeriod .
    }`,
    postProcessing: (res) => {
      return res.results.bindings.map((b) => {
        return {
          iri: b.proposal.value,
          label: b.label.value,
          investment: b.investment.value,
          calculatedAnnualSavings: b.calculatedAnnualSavings.value,
          simpleRepaymentPeriod: b.simpleRepaymentPeriod.value,
        };
      });
    },
  }
];

function iriToGlobalId(iri) {
  return decodeURIComponent(iri.split("/")?.pop() ?? iri);
}

