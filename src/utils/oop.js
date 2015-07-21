var _oop = {
    'define': function(classInfo, classTraits, classStatics) {
        if(!classInfo)
            throw new Error('There\'s no class info!');

        var className = classInfo['name']; 
        var classConstructor;
        var classParent;
        if(typeof className !== 'string' || className === '')
            throw new Error('There\'s no class name!');

        classConstructor = classInfo('constructor');
        classParent = classInfo['parent'];
    }
};
