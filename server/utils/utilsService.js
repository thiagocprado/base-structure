exports.getLoggedUser = (session) => {
  return {
    id: session.id || 0,
    email: session.email || null,
    authorized: true,
  };
};
