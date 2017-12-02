module.exports = {
    "id": `${process.env.EMAIL_BASE_URL}/issuer/`,
    "url": "http://www.blockcerts.org/mockissuer/certificates/",
    "introductionURL": `${process.env.EMAIL_BASE_URL}/roster/`,
    "name": "E-Mitra",
    "email": "support@emitra.org",
    "image": "data:image/png;base64,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..",
    "issuerKeys": [{
        "date": "2016-12-01",
        "key": "msK54hVi3wGaimTGFyLtFNh2HoZsNQX1we"
    }],
    "revocationKeys": [{
        "date": "2016-12-01",
        "key": "1PrmJ6pGbfe4ucNCVbe4tbXRRHMsDDSxvY"
    }]
}