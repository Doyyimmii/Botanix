function isAdmin(member) {
    return member.permissions.has('Administrator');
}

function isMod(member) {
    return member.permissions.has('KickMembers') || member.permissions.has('BanMembers');
}

module.exports = { isAdmin, isMod }; 