function RemoteService() {

}

RemoteService.post = function(endpoint, parameters) {
    return $.post(endpoint, parameters);
};